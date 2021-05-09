import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './Body.css'

const defaultProps = {
  bgcolor: "#504a4a",
  borderColor: "text.primary",
  marginTop: "1rem",
  style: { width: "100%", minHeight: "90vh" },
  borderRadius: "30px",
};

const Body = () => {
  return (
    <div className="body-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box {...defaultProps} borderColor="primary.main">
          Hey Body
        </Box>
      </Grid>
    </div>
  );
};

export default Body;

