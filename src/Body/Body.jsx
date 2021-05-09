import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Body.css";
import SearchBox from "../SearchBox/SearchBox";
import CryptoJS from "crypto-js";
import axios from "axios";

const defaultProps = {
  bgcolor: "#518cca",
  borderColor: "text.primary",
  marginTop: "1rem",
  style: { width: "100%", minHeight: "90vh" },
  borderRadius: "30px",
};

const Body = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const PublicKey = "da8461dc7ffeb7b5eb1d538469d985c0";
    const PrivateKey = "dc0194e8887ce630a6f41e28b75a5fd30cfd49cc";
    var timeStamp = +new Date();
    var md5Hash = CryptoJS.MD5(`${timeStamp}${PrivateKey}${PublicKey}`);
    axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${PublicKey}&ts=${timeStamp}&hash=${md5Hash}`
    ).then(res => {
      setData(res.data)
    })
  });

  return (
    <div className="body-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box {...defaultProps} borderColor="primary.main">
          <Grid container direction="row" justify="center" alignItems="center">
            <SearchBox search={search} setSearch={setSearch} />
            {console.log(data)}
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Body;
