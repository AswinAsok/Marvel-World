import React, { useState, useEffect } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import "./App.css";
import CryptoJS from "crypto-js";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("Iron Man");
  const [searchClick, setSearchClick] = useState(false);

  const fetchdata = () => {
    const PublicKey = "da8461dc7ffeb7b5eb1d538469d985c0";
    const PrivateKey = "dc0194e8887ce630a6f41e28b75a5fd30cfd49cc";
    var timeStamp = +new Date();
    var md5Hash = CryptoJS.MD5(`${timeStamp}${PrivateKey}${PublicKey}`);
    console.log(md5Hash.toString())
    console.log(timeStamp)
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=${PublicKey}&ts=${timeStamp}&hash=${md5Hash}&nameStartsWith=${search}`
      )
      .then((res) => {
        setData(res.data.data.results);
      });

    if(searchClick){
      setSearchClick(false)
    }
  };

  useEffect(() => {
    fetchdata();
  }, [searchClick]);

  return (
    <div className="App">
      <Header />
      <Body
        data={data}
        setData={setData}
        fetchdata={fetchdata}
        search={search}
        setSearch={setSearch}
        searchClick={searchClick}
        setSearchClick={setSearchClick}
      />
    </div>
  );
}

export default App;
