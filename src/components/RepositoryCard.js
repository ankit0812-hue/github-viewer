import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const RepositoryCard = (props) => {
  const useStyles = makeStyles((_) => ({
    card: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    secondaryText: {
      color: "#1565c0",
    },
    marginBottomZero: {
      marginBottom: "0px",
    },
    marginTopZero: {
      marginTop: "0px",
    },
    marginTopAndRightFive: {
      marginRight: "5px",
      marginTop: "5px",
    },
  }));

  const data = props.data;

  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <h2 className={clsx(classes.secondaryText, classes.marginTopZero)}>
          {props.data.name}
        </h2>
        <h4 className={classes.marginBottomZero}>Description : </h4>
        <p className={classes.marginTopZero}>
          {props.data.description ?? "Not Available"}
        </p>
        <h4 className={classes.marginBottomZero}>Tags : </h4>
        {data.topics.length > 0 ? (
          data.topics.map((topic) => (
            <Chip
              label={topic}
              color="primary"
              variant="outlined"
              className={classes.marginTopAndRightFive}
            />
          ))
        ) : (
          <span>Not Available</span>
        )}
      </CardContent>
    </Card>
  );
};

export default RepositoryCard;
