import "./Profile.css";

const Profile = ({ state }) => {
  const user = Object.values(state.users).find(
    (user) => state.profile === user.name
  );

  const reviews = Object.values(state.reviews).filter(
    (review) => review.helper_id === user.id
  );

  const avgStars =
    reviews.length >= 1
      ? reviews.reduce((curr, acc) => curr + acc.stars, 0) / reviews.length
      : "N/A";

  const starIcons = (avgStars) => {
    const full = (
      <img
        className="stars"
        src="/star-solid.svg"
        alt="fullstar"
        width="20px"
        height="20px"
        fill="#ace"
      />
    );
    const half = (
      <img
        className="stars"
        src="/star-half-alt-solid.svg"
        alt="halfstar"
        width="20px"
        height="20px"
      />
    );
    const empty = (
      <img
        className="stars"
        src="/star-regular.svg"
        alt="nostar"
        width="20px"
        height="20px"
      />
    );
    const fullStars = avgStars - (avgStars % 1);

    const starArr = [];
    let stars = 0;
    while (stars < fullStars) {
      starArr.push(full);
      stars++;
    }

    avgStars % 1 >= 0.5 && starArr.push(half);

    while (starArr.length < 5) {
      starArr.push(empty);
    }
    return starArr;
  };

  const reviewCats = reviews
    .map(
      (review) => state.categories[state.jobs[review.job_id].category_id].name
    )
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

  return (
    <div className="profile-card">
      <div>
        <div className="card-name-container">
          <div className="profile-info">
            <h5 className="card-title">{user.name}</h5>
            <img src={user.avatar} alt="profile" className="profile" />
          </div>

          <div className="stars-container">
            <p>Average Stars</p>
            <div className="stars">
              {starIcons(avgStars)}
              <div className="stars-container">
                {Object.keys(reviewCats).map((cat, i) => (
                  <span className="review-title">
                    {cat}: {reviewCats[cat]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div className="reviews">
              <div className="job-details">
                <div className="review-box">
                  <p>
                    {
                      state.categories[state.jobs[review.job_id].category_id]
                        .name
                    }
                  </p>
                  <h4>{review.name} </h4>
                </div>
                <h5 className="stars">{starIcons(review.stars)}</h5>
              </div>
              <div className="job-feedback">
                <p>
                  <span className="review-title">
                    {state.users[state.jobs[review.job_id].client_id].name}:
                  </span>
                  "{review.details}"
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="reviews">
            {state.profile} hasn't completed any jobs yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
