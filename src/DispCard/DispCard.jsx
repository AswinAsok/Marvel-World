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

const DispCard = ({ eachdata, index }) => {
  return (
    <div>
      {(() => {
        if (eachdata.name) {
          return (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box {...defaultProps}>
                <h1>{eachdata.name}</h1>
                <p>{eachdata.description}</p>
              </Box>
            </Grid>
          );
        }
      })()}
    </div>
  );
};

export default DispCard;
