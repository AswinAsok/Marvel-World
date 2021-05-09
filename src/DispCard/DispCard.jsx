import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Divider from '@material-ui/core/Divider';

const defaultProps = {
  bgcolor: "#f78f3f",
  m: 1,
  padding: 1,
  borderColor: "text.primary",
  style: { width: "80%" },
  borderRadius: "0px 15px",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const DispCard = ({ eachdata, index }) => {
  const classes = useStyles();

  return (
    <div>
      {(() => {
        if (eachdata.name) {
          const source = `${eachdata.thumbnail.path}/portrait_fantastic.jpg`;

          return (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box {...defaultProps}>
              <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
                <Avatar
                  alt={eachdata.name}
                  src={source}
                  className={classes.large}
                />
                <h1>{eachdata.name}</h1>
                <p>{eachdata.description}</p>
                <a href={eachdata.urls[0].url}><h1><u>Know More About "{eachdata.name}"</u></h1></a>
                {console.log(eachdata.urls[1].url)}
                </Grid>
              </Box>
            </Grid>
          );
        }
      })()}
    </div>
  );
};

export default DispCard;
