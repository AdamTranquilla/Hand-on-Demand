import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Map from "./Map";
import ChatNav from "./Chat/ChatNav";
import { io } from "socket.io-client";
import Jobs from "./Jobs";
import useAppData from "./hooks/useAppData";
import { getJobsFiltered } from "./helpers/selectors";
import JobToggle from "./JobToggle/JobToggle";

export default function App() {
  const {
    state,
    setState,
    setJobView,
    setMessageView,
    getConversations,
    getMessages,
    setChat,
    setCurrentUser,
    removeCurrentUser,
    cookies,
    setMessages,
    postJob,
    postOffer,
    postReview,
    updateOffer,
    addMessage,
    room,
    setRoom,
    setProfile,
    getUserNameFromId,
    deletePost,
  } = useAppData();

  const [socket, setSocket] = useState("");
  const [message, setMessage] = useState("");
  const [currentChat, setCurrentChat] = useState([]);
  const [selected, setSelected] = useState();
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [distanceFilter, setDistanceFilter] = useState(1000);
  const [coord, setCoord] = useState({
    lat: 49.26800377076573,
    lng: -123.10571490809717,
  });
  const jobsFiltered = getJobsFiltered(
    state,
    coord,
    categoryFilter,
    distanceFilter
  );

    if REACT_APP_WEBSOCKET_URL

    if (process.env.REACT_APP_WEBSOCKET_URL) {
      axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
    }

  let wsServer = process.env.REACT_APP_WEBSOCKET_URL
    ? process.env.REACT_APP_WEBSOCKET_URL
    : "http://localhost:8001";

  const initiateSocket = (room) => {
    const socket = io(wsServer, { transports: ["websocket"] });
    // SET SOCKET CONNECTION IN STATE
    setSocket(socket);
    if (socket && room) socket.emit("join", room);

    // LISTEN FOR NEW MESSAGES AND CREATE THE MESSAGE OBJECT
    socket.on("chat", (msg) => {
      const newMessage = {
        offer_id: state.chatId,
        user_id: msg.user_id,
        message: msg.message,
      };
      // COPY THE PREVIOUS STATE AND ADD THE NEW MESSAGE
      setState((prev) => ({
        ...prev,
        userMessages: [...prev.userMessages, newMessage],
      }));
    });
  };

  const disconnectSocket = () => {
    if (socket) socket.disconnect();
    setSocket(null);
  };

  // DISCONNECT AND RECONNECT TO A NEW SOCKET EVERYTIME A USER SWITCHES CHATS
  useEffect(() => {
    disconnectSocket();
    if (state.chatId) initiateSocket(room);
  }, [room]);

  return (
    <div className="App">
      <Navbar
        setProfile={setProfile}
        setCurrentUser={setCurrentUser}
        removeCurrentUser={removeCurrentUser}
        getUserNameFromId={getUserNameFromId}
        setJobView={setJobView}
        cookies={cookies}
        state={state}
      />
      <div className="page-containers">
        <div className="map-container">
          <Map
            state={state}
            setJobView={setJobView}
            jobView={state.jobView}
            setCoord={setCoord}
            coord={coord}
            jobMarkers={jobsFiltered}
            setSelected={setSelected}
            selected={selected}
          />
        </div>

        <div className="right-container">
          <div className="view-container">
            <JobToggle
              state={state}
              setJobView={setJobView}
              jobView={state.jobView}
            />
          </div>
          <div className="jobs-container">
            <Jobs
              state={state}
              setJobView={setJobView}
              message={message}
              room={room}
              setRoom={setRoom}
              setMessage={setMessage}
              currentChat={currentChat}
              setCurrentChat={setCurrentChat}
              setMessageView={setMessageView}
              getConversations={getConversations}
              getMessages={getMessages}
              setChat={setChat}
              setCoord={setCoord}
              coord={coord}
              jobsFiltered={jobsFiltered}
              setSelected={setSelected}
              selected={selected}
              setCategoryFilter={setCategoryFilter}
              setDistanceFilter={setDistanceFilter}
              cookies={cookies}
              setCurrentUser={setCurrentUser}
              removeCurrentUser={removeCurrentUser}
              setMessages={setMessages}
              postJob={postJob}
              postOffer={postOffer}
              postReview={postReview}
              updateOffer={updateOffer}
              addMessage={addMessage}
              setProfile={setProfile}
              getUserNameFromId={getUserNameFromId}
              deletePost={deletePost}
            />
          </div>
          <div className="chat-container">
            <ChatNav state={state} setJobView={setJobView} />
          </div>
        </div>
      </div>
    </div>
  );
}
