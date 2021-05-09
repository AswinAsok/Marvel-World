import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const defaultProps = {
  bgcolor: "#f78f3f",
  m: 1,
  padding: 1,
  borderColor: "text.primary",
  style: { width: "80%" },
  borderRadius: "0px 15px",
};

const Disp404 = ({ search }) => {
  const search_here = search;

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box {...defaultProps}>
          <h1>Oh, Some Error Has Occurced</h1>
          <p>No data was found for your query</p>
        </Box>
      </Grid>
    </div>
  );
};

export default Disp404;
