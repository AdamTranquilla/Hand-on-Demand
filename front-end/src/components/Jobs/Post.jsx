import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Places from "../Places/Places";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import "./Jobs.css";

export default function Post({ state, coord, setCoord, onSave }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [pay_type, setPayType] = useState("");
  const [start_date, setStartDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  const [error, setError] = useState("");

  function validate(e) {
    e.preventDefault();
    const newJob = {
      client_id: state.currentUser,
      name,
      category_id,
      description,
      lat: coord.lat,
      lng: coord.lng,
      price,
      pay_type,
      status: "POSTED",
      start_date,
      end_date,
    };

    if (
      name === "" ||
      category_id === "" ||
      description === "" ||
      price === "" ||
      pay_type === "" ||
      start_date === "" ||
      end_date === ""
    ) {
      setError("Please fill all fields");
      return;
    }
    setError("");

    onSave(newJob);
  }

  const handleChange = (event) => {
    setPayType(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <>
      <h3>Post A Help Request</h3>
      <div className="post-form">
        <div className="post-form-container">
          <TextField
            id="job-name"
            style={{ width: 450, margin: 8, marginTop: 0 }}
            label="Job"
            placeholder="What do you need help with?"
            fullWidth
            onChange={(event) => setName(event.target.value)}
            autoComplete="off"
          />
          <br />
          <TextField
            id="job-descripton"
            name="job-descripton"
            style={{ width: 450, margin: 8 }}
            label="Description"
            placeholder="Details of your job"
            fullWidth
            multiline
            rowsMax="10"
            onChange={(event) => setDescription(event.target.value)}
          />
          <Autocomplete
            onChange={(event, value) => setCategory(value ? value.id : "")}
            id="category-search"
            name="category-search"
            value={state.category_id}
            options={Object.values(state.categories)}
            getOptionLabel={(option) => option.name}
            style={{ width: 450, margin: 8 }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <Places setCoord={setCoord} coord={coord} />
          <TextField
            label="Price"
            id="price"
            name="price"
            value={state.price}
            style={{ width: 208, margin: 8, marginRight: 25 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            onChange={(event) => setPrice(event.target.value)}
            autoComplete="off"
          />
          <FormControl
            className={classes.formControl}
            onSubmit={(event) => event.preventDefault()}
          >
            <InputLabel id="pay-type">Pay Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="pay-type-select"
              name="pay-type-select"
              value={state.pay_type}
              onChange={handleChange}
              style={{ width: 208 }}
            >
              <MenuItem value={"/hr"}>Per Hour</MenuItem>
              <MenuItem value={" total"}>Total</MenuItem>
            </Select>
          </FormControl>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
              <KeyboardDatePicker
                style={{ width: 208, margin: 8, marginRight: 25 }}
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                label="Start Date"
                value={start_date}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <br />
              <KeyboardDatePicker
                style={{ width: 208, margin: 8 }}
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                label="End Date"
                value={end_date}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <br />
          <span>{error}</span>
          <button onClick={(e) => validate(e)} className="btn">
            POST
          </button>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));
