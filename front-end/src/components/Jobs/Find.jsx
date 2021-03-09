import "./Jobs.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FindListItem from "../JobList/FindListItem";
import Places from "../Places/Places";
import React from "react";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    margin: "auto",
  },
}));

const marks = [
  {
    value: 1,
    label: "1km",
  },
  {
    value: 5,
    label: "5km",
  },
  {
    value: 10,
    label: "10km",
  },
  {
    value: 15,
    label: "15km",
  },
  {
    value: 20,
    label: "20km",
  },
  {
    value: 25,
    label: "25km",
  },
];

export default function Find({
  jobsFiltered,
  setCategoryFilter,
  setDistanceFilter,
  state,
  setJobView,
  saveOffer,
  setCoord,
  selected,
  setSelected,
  setProfile,
  coord,
  cookies,
  getConversations,
}) {
  const classes = useStyles();
  const categories = Object.values(state.categories);

  return (
    <div className="jobs-container">
      <h3>Apply To Help</h3>
      <div className="apply-filters">
        <div className="category-box">
          <div className={classes.root}>
            <Autocomplete
              onChange={(event, value) => {
                setCategoryFilter(value || []);
              }}
              style={{
                width: 450,
                marginTop: 0,
                marginLeft: 10,
              }}
              multiple
              id="filter-categories"
              options={categories}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Category"
                  placeholder="Job Type"
                  setJobView={setJobView}
                />
              )}
            />
            <Places setCoord={setCoord} coord={coord} />
            <Slider
              defaultValue={5}
              min={1}
              max={25}
              aria-labelledby="discrete-slider-custom"
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              style={{ color: "#9fc5e7;" }}
              onChange={(event, value) => {
                setDistanceFilter(value || null);
              }}
              style={{
                width: 450,
                marginBottom: 8,
                marginTop: 15,
                marginLeft: 10,
              }}
            />
          </div>
        </div>
      </div>
      {jobsFiltered
        /* .filter((job) => job.client_id !== state.currentUser) */
        .map((job) => (
          <FindListItem
            {...job}
            job_id={job.id}
            onSave={saveOffer}
            setJobView={setJobView}
            state={state}
            setCoord={setCoord}
            isSelected={selected && selected.id === job.id}
            setSelected={setSelected}
            setProfile={setProfile}
            getConversations={getConversations}
            cookies={cookies}
          />
        ))}
    </div>
  );
}
