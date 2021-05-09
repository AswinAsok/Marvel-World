import React,{useState} from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './Body.css'
import SearchBox from "../SearchBox/SearchBox";

const defaultProps = {
  bgcolor: "#504a4a",
  borderColor: "text.primary",
  marginTop: "1rem",
  style: { width: "100%", minHeight: "90vh" },
  borderRadius: "30px",
};

const Body = () => {

  const[search, setSearch] = useState("");

  return (
    <div className="body-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box {...defaultProps} borderColor="primary.main">
         <SearchBox search={search} setSearch={setSearch}/>
        </Box>
      </Grid>
    </div>
  );
};

export default Body;

