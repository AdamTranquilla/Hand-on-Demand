import "./JobToggle.css";

export default function JobToggle({ setJobView, jobView }) {
  return (
    <div className="toggle-btn-container">
      <button
        className={`multi-button skin ${jobView === "ALL" ? "selected" : ""}`}
        onClick={() => {
          setJobView("ALL");
        }}
      >
        Jobs
      </button>
      <button
        className={`multi-button skin ${jobView === "POST" ? "selected" : ""}`}
        onClick={() => {
          setJobView("POST");
        }}
      >
        Post
      </button>
      <button
        className={`multi-button skin ${jobView === "FIND" ? "selected" : ""}`}
        onClick={() => {
          setJobView("FIND");
        }}
      >
        Apply
      </button>
    </div>
  );
}
