
import React, { useState, useEffect } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import "./App.css";
import CryptoJS from "crypto-js";
import axios from "axios";

const { REACT_APP_PRIVATE_KEY, REACT_APP_PUBLIC_KEY } = process.env;

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState(false);
  const [nodbtn, setNodbtn] = useState(false);
  const fetchdata = () => {
    const PublicKey = REACT_APP_PUBLIC_KEY;
    const PrivateKey = REACT_APP_PRIVATE_KEY;
    var timeStamp = +new Date();
    var md5Hash = CryptoJS.MD5(`${timeStamp}${PrivateKey}${PublicKey}`);
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=${PublicKey}&ts=${timeStamp}&hash=${md5Hash}&nameStartsWith=${search}`
      )
      .then((res) => {
        setData(res.data.data.results);
      });

    if (searchClick) {
      setSearchClick(false);
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
        nodbtn={nodbtn}
        setNodbtn={setNodbtn}
      />
      <Footer />
    </div>
  );
}

export default App;
