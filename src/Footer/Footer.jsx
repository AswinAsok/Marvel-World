import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";

const defaultProps = {
  bgcolor: "#e23636",
  marginTop: 3,
  borderColor: "text.primary",
  style: { width: "20rem" },
  borderRadius: "10px 10px 0px 0px",
};

const Footer = () => {
  return (
    <div className="Footer-container">
      <Grid container direction="column" alignItems="center">
        <Box {...defaultProps}>
          <h1>Developed with React 🚀 By Aswin Asok</h1>
          <a href="https://github.com/AswinAsok/Marvel-World">
            <h1>Star 🌟 This Repository</h1>
          </a>
        </Box>
      </Grid>
    </div>
  );
};

export default Footer;
