import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Header.css";

const defaultProps = {
  bgcolor: "#e23636",
  style: { width: "100%", height: "12vh" },
  borderRadius: "0px 0px 30px 30px",
};

const Header = () => {
  return (
    <div className="Header">
      <Box {...defaultProps} borderColor="primary.main">
        <div className="head-text">Marvel World</div>
      </Box>
    </div>
  );
};

export default Header;
