// HELPER FUNCTION TO FILTER JOBS STATE USED ON MAP, AND IN FIND VIEW
export function getJobsFiltered(state, coord, categoryFilter, distanceFilter) {
  // JOBS IN PROGRESS AND COMPLETED ARE NOT SHOWN
  const pendingJobs = Object.values(state.jobs).filter(
    (job) => job.status === "POSTED"
  );

  // JOBS OUTSIDE OF USE SPECIFIC RADIUS ARE NOT SHOWN
  let radiusJobs;
  distanceFilter
    ? (radiusJobs = pendingJobs.filter(
        (job) =>
          distBtw2Ptss([job.lat, job.lng], [coord.lat, coord.lng]) <
          distanceFilter
      ))
    : (radiusJobs = pendingJobs);

  return categoryFilter.length === 0
    ? radiusJobs
    : radiusJobs.filter((job) =>
        categoryFilter.some((filter) => filter.id === job.category_id)
      );
}

// HAVERSINE FORMULA USED FOR GREAT CIRCLE DISTANCE BETWEEN TWO POINTS, AKA 'AS-THE-CROW-FLIES'
const distBtw2Ptss = (p1, p2) => {
  try {
    const lat1 = p1[0] / (180 / Math.PI);
    const lat2 = p2[0] / (180 / Math.PI);
    const lon1 = p1[1] / (180 / Math.PI);
    const lon2 = p2[1] / (180 / Math.PI);
    const distance =
      6371 *
      Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2)
      );
    return distance;
  } catch (error) {
    return null;
  }
};
