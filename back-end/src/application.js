const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const db = require("./db");

const users = require("./routes/users");
const jobs = require("./routes/jobs");
const categories = require("./routes/categories");
const offers = require("./routes/offers");
const messages = require("./routes/messages");
const reviews = require("./routes/reviews");
const loginMessages = require("./routes/login-messages");
const loginJobs = require("./routes/login-jobs");
const loginOffers = require("./routes/login-offers");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

// EXPORT THE ROUTER WITH THE SOCKET CONNECTION
module.exports = function application(ENV, actions = { updateJobs: () => {} }) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  // GET COOKIES FOR CHAT ROOM AND CURRENT USER
  io.on("connection", (socket) => {
    const getCurrentCookies = () => {
      // console.log("COOKIE ERROR EXISTS HERE", socket.handshake.headers);

      if (socket.handshake.headers.cookie) {
        const cookies = socket.handshake.headers.cookie.split(" ");
        let currentUser;
        let currentRoom;
        for (const cookie of cookies) {
          if (cookie.includes("user")) {
            currentUser = cookie;
          } else {
            currentRoom = cookie;
          }
        }
        return { currentUser, currentRoom };
      }
    };

    const userCookies = getCurrentCookies();

    // ADD USERS TO THE CORRECT ROOM ON JOIN
    socket.on("join", (room) => {
      console.log(`Socket ${socket.id} joining ${room}`);
      socket.join(room);
    });
  });

  const getSocket = () => {
    return io.sockets;
  };

  // PASS DATABASE AND ALL SOCKETS TO EXPRESS MIDDLEWEAR
  app.use("/api", users(db, getSocket));
  app.use("/api", jobs(db, getSocket));
  app.use("/api", categories(db, getSocket));
  app.use("/api", offers(db, getSocket));
  app.use("/api", messages(db, getSocket));
  app.use("/api", reviews(db, getSocket));
  app.use("/api", offers(db, getSocket));
  app.use("/api", loginMessages(db, getSocket));
  app.use("/api", loginJobs(db, getSocket));
  app.use("/api", loginOffers(db, getSocket));

  app.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
  });

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
