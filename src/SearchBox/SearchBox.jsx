/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import './SearchBox.css'

const useStyles = makeStyles((theme) => ({
 
}));

const SearchBox = ({ search, setSearch, data, setData, fetchdata }) => {
  const classes = useStyles();
  return (
    <div className="Search-box">
      <Autocomplete
        id="combo-box-demo"
        // options={top100Films}
        // getOptionLabel={(option) => option.title}
        style={{ width: 300, color: "white" }}
        classes={classes}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    </div>
  );
};

export default SearchBox;
