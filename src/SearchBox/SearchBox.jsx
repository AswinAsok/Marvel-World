/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./SearchBox.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SearchBox = ({
  search,
  setSearch,
  data,
  setData,
  fetchdata,
  searchClick,
  setSearchClick,
}) => {
  const classes = useStyles();
  return (
    <div className="Search-box">
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search Database"
            variant="outlined"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </form>
        <Button
          onClick={() => {
            if (search.length > 0) {
              setSearchClick(true);
            }
          }}
          variant="outlined"
        >
          Search
        </Button>
      </Grid>
    </div>
  );
};

export default SearchBox;
