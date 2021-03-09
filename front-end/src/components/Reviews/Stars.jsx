import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import GradeIcon from "@material-ui/icons/Grade";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const StyledRating = withStyles({
  icon: {
    fontSize: "50px",
  },
  iconFilled: {
    color: "#093a79",
  },
  iconHover: {
    color: "#093a79",
  },
  heading: {
    textAlign: "center;",
    color: "#093a79;",
  },
})(Rating);

const Styles = makeStyles({
  header: {
    textAlign: "center;",
  },

  text: {
    textAlign: "center;",
  },
});

const customIcons = {
  1: {
    icon: <GradeIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <GradeIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <GradeIcon />,
    label: "Neutral",
  },
  4: {
    icon: <GradeIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <GradeIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer({ value, ...other }) {
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CustomizedRatings({ starValue, setStarValue }) {
  const classes = Styles();
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <h1 className={classes.header}>Rate!</h1>
        <StyledRating
          size="large"
          name="customized-color"
          value={starValue}
          getLabelText={(starValue) => customIcons[starValue].label}
          onChange={(event, newValue) => {
            setStarValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {starValue !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : starValue]}</Box>
        )}
      </Box>
    </div>
  );
}
