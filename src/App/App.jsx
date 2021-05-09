import React, { useState, useEffect } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import "./App.css";
import CryptoJS from "crypto-js";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const fetchdata = () => {
    const PublicKey = "da8461dc7ffeb7b5eb1d538469d985c0";
    const PrivateKey = "dc0194e8887ce630a6f41e28b75a5fd30cfd49cc";
    var timeStamp = +new Date();
    var md5Hash = CryptoJS.MD5(`${timeStamp}${PrivateKey}${PublicKey}`);
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=${PublicKey}&ts=${timeStamp}&hash=${md5Hash}`
      )
      .then((res) => {
        setData(res.data.data.results);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Header />
      {console.log(data)}
      <Body data={data} setData={setData} fetchdata={fetchdata}/>
    </div>
  );
}

export default App;
