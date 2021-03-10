# Hand on Demand

Hand on Demand is a responsive google maps based web app where users can pin help requests to the map that other users can filter through, and apply to!

## Project by
- [Adam Tranquilla](https://github.com/AdamTranquilla)
  - Database, Requests and Routing (Node.js, Express, Axios, pSQL)
  - Job Posting, Job Applications (React/JSX)
  - Job/Markers Filtering, Map Panning (Google Places API, React/JSX)
  - Profile Ratings and Categories (CSS, React/JSX)
- [Natasha Colusso](https://github.com/NColusso)
  - Implementing map component (Google Maps API, React/JSX)
  - Helper functions for state (React/JSX)
  - External component implementation (Material UI)
- [Zach Harrison](https://github.com/zachharrison)
  - Chat Feature  (Socket.io, cookies, React/JSX)
  - Styling Lead (HTML5/CSS)
  - Review Form (Material.UI, React/JSX)


This app is deployed on Netlify with a Heroku Backend. The backend goes to sleep during inactivity and may need a few seconds to wake up. 

This app relies on user interaction. To simulate this, there is preset data (job listings and offers) that may be mutated by other site visitor. Feel free to [RESET](https://handondemand-api.herokuapp.com/api/debug/reset) the preset development data for the full experience!

#### [NETLIFY DEPLOYMENT](https://hand-on-demand.netlify.app/)

### Posting Jobs
- From the POST page, users can list jobs with specified locations, categories, prices and payment types. After a location and category are selected, a category-themed marker will pin the jobs to the map.
!["posting job"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/post-new-job.gif?raw=true)

### Applying to Jobs
- When applying to jobs, helpers can filter based on location, distance, and job category. They can then send a counter offer based on price and payment type. 
- Clicking on jobs also pans to the jobs marker to show its general location, without revealing the address.
!["filter and apply list"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/apply.gif?raw=true)

### Accepting and Reviewing Applicants 
- From the JOBS sections, users can see all of their postings, applications, and completed jobs. Posted jobs show all applications to them in a drop-down menu where applicants can be accepted or declined.
- Before accepting a job offer, users can view the applicant's profile by selecting their avatar banner. Here you can see an applicant's past reviews, average rating and completions per job category. Users can also message each other to discuss job details
- After accepting an offer, users can review the accepted applicant and either mark the job as completed or repost the job. Reposting a job brings back any pending applications.
!["accepting applicants"](https://github.com/AdamTranquilla/hand-on-demand/blob/master/front-end/public/offer.gif?raw=true)

## Stack

### Frontend:

- React
- JS, JSX
- HTML5/CSS
- Material UI

### Backend:

- Node
- Express 
- pSQL
- socket.io
- google maps API

## Setup

Install dependencies within both the front-end and back-end folder with `npm i`.

## Creating The DB

On back-end:

1. Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`.
2. Create a database with the command `CREATE DATABASE handondemand_development;`.
3. Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

## Seeding the DB

On back-end either:
1. Either run the development server with `npm start` and make a `GET` with `http://localhost:8001/api/debug/reset`, 
2. Or seed directly in psql with `\i src/db/schema/create.sql` and `\i src/db/schema/development.sql`.

## Run The Servers

1. Run both the front-end and back-end servers with `npm start`
