import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Body.css";
import SearchBox from "../SearchBox/SearchBox";
import DispCard from "../DispCard/DispCard";

const defaultProps = {
  bgcolor: "#518cca",
  borderColor: "text.primary",
  marginTop: "1rem",
  style: { width: "100%", minHeight: "90vh" },
  borderRadius: "30px",
};

const Body = ({ data, setData, fetchdata }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="body-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box {...defaultProps} borderColor="primary.main">
          <Grid container direction="row" justify="center" alignItems="center">
            {/* <SearchBox search={search} setSearch={setSearch} data={data} setData={setData} fetchdata={fetchdata}/> */}
          </Grid>


          <Grid container direction="row" justify="center" alignItems="center">
            <DispCard data={data} setData={setData} />
          </Grid>
          

        </Box>
      </Grid>
    </div>
  );
};

export default Body;
