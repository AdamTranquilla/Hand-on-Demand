import Post from "./Post";
import Find from "./Find";
import All from "./All";
import Profile from "../Profile/Profile";
import Chat from "../Chat/Chat";
import ChatList from "../Chat/ChatList";
import Login from "../Login/Login";
import "./Jobs.css";

export default function Jobs({
  state,
  setJobView,
  getConversations,
  getMessages,
  setChat,
  setCoord,
  coord,
  cookies,
  setCurrentUser,
  removeCurrentUser,
  setMessages,
  postJob,
  postOffer,
  postReview,
  updateOffer,
  message,
  room,
  setRoom,
  setMessage,
  currentChat,
  setCurrentChat,
  setMessageView,
  addMessage,
  setCategoryFilter,
  setDistanceFilter,
  jobsFiltered,
  selected,
  setSelected,
  setProfile,
  getUserNameFromId,
  deletePost,
}) {
  function saveJob(newJob) {
    postJob(newJob)
      .then(() => setJobView("ALL"))
      .catch((error) => {
        console.log(`Error saving job: ${error}`);
      });
  }

  function saveOffer(newOffer) {
    postOffer(newOffer)
      .then(() => setJobView("ALL"))
      .catch((error) => {
        console.log(`Error saving offer: ${error}`);
      });
  }

  return (
    <div className="job-container">
      {state.jobView === "POST" && cookies.user && (
        <div>
          <Post
            state={state}
            setCoord={setCoord}
            coord={coord}
            onSave={saveJob}
            setJobView={setJobView}
          />
        </div>
      )}
      {state.jobView === "PROFILE" && cookies.user && (
        <div>
          <Profile state={state} cookies={cookies} />
        </div>
      )}
      {state.jobView === "FIND" && (
        <div>
          <Find
            state={state}
            jobsFiltered={jobsFiltered}
            setCategoryFilter={setCategoryFilter}
            setDistanceFilter={setDistanceFilter}
            saveOffer={saveOffer}
            setJobView={setJobView}
            setCoord={setCoord}
            coord={coord}
            selected={selected}
            setSelected={setSelected}
            setProfile={setProfile}
            getConversations={getConversations}
            cookies={cookies}
          />
        </div>
      )}
      {state.jobView === "ALL" && cookies.user && (
        <div>
          <All
            state={state}
            setJobView={setJobView}
            setCoord={setCoord}
            setProfile={setProfile}
            postReview={postReview}
            updateOffer={updateOffer}
            deletePost={deletePost}
          />
        </div>
      )}
      {state.jobView === "MESSAGE" && cookies.user && (
        <div>
          <ChatList
            setJobView={setJobView}
            getConversations={getConversations}
            setChat={setChat}
            setMessageView={setMessageView}
            getUserNameFromId={getUserNameFromId}
            currentUser={state.currentUser}
          />
        </div>
      )}
      {!cookies.user && state.jobView !== "FIND" && (
        <div className="accordion-show">
          <Login
            cookies={cookies}
            removeCurrentUser={removeCurrentUser}
            setCurrentUser={setCurrentUser}
          />
        </div>
      )}
      {state.jobView === "CHAT" && cookies.user && (
        <div>
          <Chat
            message={message}
            room={room}
            setRoom={setRoom}
            setMessage={setMessage}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
            setMessageView={setMessageView}
            getMessages={getMessages}
            state={state}
            setMessages={setMessages}
            cookies={cookies}
            addMessage={addMessage}
            setJobView={setJobView}
            setProfile={setProfile}
          />
        </div>
      )}
    </div>
  );
}
