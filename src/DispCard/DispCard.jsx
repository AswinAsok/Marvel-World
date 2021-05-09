import React from "react";
import Box from "@material-ui/core/Box";

const defaultProps = {
  bgcolor: "#f78f3f",
  m: 1,

  borderColor: "text.primary",
  style: { width: "100%", minHeight: "5rem" },
};

const DispCard = ({data, setData}) => {
  return (
    <div>
      <Box {...defaultProps}>
        
      </Box>
    </div>
  );
};

export default DispCard;
