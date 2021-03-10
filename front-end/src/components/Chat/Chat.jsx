import "./Chat.css";

export default function Chat({
  getMessages,
  state,
  cookies,
  message,
  setMessage,
  setCurrentChat,
  setJobView,
  setProfile,
  addMessage,
}) {
  const offer_id = state.chatId;

  const onMessageSubmit = () => {
    const user_id = cookies.user;

    // MAKE POST REQUEST TO THE DATABASE
    addMessage({ offer_id, user_id, message });

    // ADD MESSAGE TO STATE AND UPDATE THE CURRENT CHAT
    setCurrentChat((oldChats) => [message, ...oldChats]);

    setMessage("");
  };

  // GET MESSAGES FROM STATE AND DISPLAY IN UI
  const messageList = getMessages(offer_id);

  const helper = state.offers[offer_id].helper_id;
  const job_id = state.offers[offer_id].job_id;
  const poster = state.jobs[job_id].client_id;
  const contact = state.currentUser === helper ? poster : helper;

  const handleProfileClick = () => {
    setJobView("PROFILE");
    setProfile(state.users[contact].name);
  };

  const messageListDisplay = messageList.map((message, index) => {
    const currentAuthor = +cookies.user;
    return (
      <div className="chat">
        <div
          className={[
            `${message.user_id == currentAuthor ? "mine" : "yours"}`,
            "messages",
          ].join(" ")}
          key={index}
        >
          <div className="message last">{message.message}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="message-list">
      <h3>{state.jobs[job_id].name}</h3>
      <div className="chat-top">
        <div className="offer-list-item">
          <div className="item-row">
            <div className="small-profile-offer" onClick={handleProfileClick}>
              <div className="profile-container">
                <img src={state.users[contact].avatar} alt="profile" />
                <p className="username">{state.users[contact].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-body">{messageListDisplay}</div>
      <div className="chat-bottom">
        <div className="message-container">
          <input
            autoComplete="off"
            className="message-input"
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
          />

          <button className="message-btn" onClick={() => onMessageSubmit()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
