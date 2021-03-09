import "./Jobs.css";
import PostedListItem from "../JobList/PostedListItem";
import AppliedListItem from "../JobList/AppliedListItem";

export default function All({
  state,
  setCoord,
  setProfile,
  setJobView,
  postReview,
  updateOffer,
  deletePost,
}) {
  const user = state.currentUser;
  const jobs = Object.values(state.jobs);

  const posted = jobs.filter(
    (job) =>
      job.client_id === user &&
      (job.status === "POSTED" || job.status === "FILLED")
  );

  const applied = Object.values(state.offers)
    .filter((offer) => offer.helper_id === user)
    .map((myApps) =>
      jobs.find((job) => job.status !== "COMPLETED" && job.id === myApps.job_id)
    )
    .filter((app) => app);

  const completed = jobs.filter(
    (job) => job.client_id === user && job.status === "COMPLETED"
  );

  return (
    <>
      <h3>Posts</h3>
      {posted.length > 0 &&
        posted.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            state={state}
            setCoord={setCoord}
            setJobView={setJobView}
            setProfile={setProfile}
            postReview={postReview}
            updateOffer={updateOffer}
            end_date={myPosts.end_date}
            deletePost={deletePost}
          />
        ))}
      {posted.length < 1 && (
        <p className="text-center">You have no posted jobs.</p>
      )}
      <h3>Applications</h3>
      {applied.length > 0 &&
        applied.map((myApps) => (
          <AppliedListItem
            {...myApps}
            key={myApps.id}
            state={state}
            setCoord={setCoord}
            setJobView={setJobView}
            setProfile={setProfile}
          />
        ))}
      {applied.length < 1 && (
        <p className="text-center">You have no applied jobs.</p>
      )}
      <h3>Completed Jobs</h3>
      {completed.length > 0 &&
        completed.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            state={state}
            setCoord={setCoord}
            setJobView={setJobView}
            setProfile={setProfile}
            job_id={myPosts.id}
            postReview={postReview}
            updateOffer={updateOffer}
          />
        ))}
      {completed.length < 1 && (
        <p className="text-center">You have no completed jobs.</p>
      )}
    </>
  );
}
