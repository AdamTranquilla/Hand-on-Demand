# Hand on Demand

Hand on Demand is a responsive google maps based web app where users can pin help requests to the map that other users can filter through, and apply to!

[This app is Deployed on Netlify](https://hand-on-demand.netlify.app/). Feel free to play around but please do not post anything offensive.
[Reset the Database](https://handondemand-api.herokuapp.com/api/debug/reset) for the best experience.

- From the POST page users can list jobs with specified locations, categories, prices and payment types. After a location and category are selected a category-themed marker will pin the jobs to the map. Clicking on jobs pans to the jobs marker.
  !["posting job form"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/post.png?raw=true)
- When applying to jobs, helpers can filter based on location, distance, and job category. They can then send a counter offer based on price and payment type.
  !["filter and apply list"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/apply.png?raw=true)
- From the JOBS sections users can see all of their postings, applications, and completed jobs. Posted jobs show all applications to them in a drop-down menu where applicants can be accepted or declined.
  !["users job list"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/my-jobs.png?raw=true)
- Before accepting a job offer users can view the applicant's profile by selecting their avatar banner. Here you can see all of an applicant's past reviews as well as their average rating and completions per job category.
  !["user profile"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/profile.png?raw=true)
- After accepting an offer users can review the accepted applicant and either mark the job as completed or repost the job. Reposting a job brings back any pending applications.
  !["review helper"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/review.png?raw=true)

## Stack

### Frontend:

- React, JS, CSS, material UI

### Backend:

- Node, express, pSQL, socket.io, google maps API

## Setup

Install dependencies within both the front-end and back-end folder with `npm i`.

## Creating The DB

On back-end:

1. Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`.
2. Create a database with the command `CREATE DATABASE handondemand_development;`.
3. Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

- this env example should be in the front end and root folder as just .env as well. For convience use the same content for each.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=handondemand_development
PGPASSWORD=development
PGPORT=5432

REACT_APP_GOOGLE_API_KEY='PRIVATE KEY'
REACT_APP_MAPBOX_API_KEY='PRIVATE KEY'
FAST_REFRESH=false
CHOKIDAR_USEPOLLING=true
REACT_APP_WEBSOCKET_URL=ws://localhost:8001
PORT=8000
CHOKIDAR_USEPOLLING=false
```

## Seeding the DB

On back-end:

1. Run the development server with `npm start` in the Host environment.
2. Then either Make a `GET` request to `/api/debug/reset` with `http://localhost:8001/api/debug/reset`, or seed directly in psql with

```psql
\i src/db/schema/create.sql
\i src/db/schema/development.sql
```

## Run The Server

On front-end:

1. Run a the server with `npm start`
