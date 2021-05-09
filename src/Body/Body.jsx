import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Body.css";
import SearchBox from "../SearchBox/SearchBox";
import DispCard from "../DispCard/DispCard";
import Disp404 from "../Disp404/Disp404";
import Divider from "@material-ui/core/Divider";

const defaultProps = {
  bgcolor: "#518cca",
  borderColor: "text.primary",
  marginTop: "1rem",
  paddingBottom: "2rem",
  style: { width: "100%", minHeight: "68vh" },
  borderRadius: "30px",
};

const Body = ({
  data,
  setData,
  fetchdata,
  search,
  setSearch,
  searchClick,
  setSearchClick,
  nodbtn,
  setNodbtn,
}) => {
  return (
    <div className="body-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box {...defaultProps} borderColor="primary.main">
          <Grid container direction="row" justify="center" alignItems="center">
            <SearchBox
              search={search}
              setSearch={setSearch}
              data={data}
              setData={setData}
              fetchdata={fetchdata}
              searchClick={searchClick}
              setSearchClick={setSearchClick}
              nodbtn={nodbtn}
              setNodbtn={setNodbtn}
            />
          </Grid>
          <br></br>
          <Divider />
          <br></br>

          {data.map(function (eachdata, i) {
            return <DispCard eachdata={eachdata} index={i} />;
          })}

          {(() => {
            if (data.length === 0 && nodbtn) {
              return (
                <div>
                  <Disp404 search={search} />
                </div>
              );
            }
          })()}
        </Box>
      </Grid>
    </div>
  );
};

export default Body;
