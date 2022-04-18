import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";

const Profile = (props) => {
  const useStyles = makeStyles((_) => ({
    location: {
      display: "flex",
      alignItems: "center",
      height: "2vh",
    },
    social: {
      display: "flex",
      alignItems: "center",
    },
    root: {
      alignItems: "center",
      justifyContent: "center",
    },
    secondaryText: {
      color: "#808080",
    },
    imageContainer: {
      display: "flex",
      alignItems: "center",
      maxWidth: "180px !important",
      "@media only screen and (max-width: 768px)": {
        maxWidth: "initial !important",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={2} sm={12} xs={12} className={classes.imageContainer}>
        <Avatar
          src={props.information.avatar_url}
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
      <Grid item md={10} sm={12} xs={12} className={classes.details}>
        <h2>{props.information.name}</h2>
        <div className={classes.location}>
          <LocationOnIcon className={classes.secondaryText} />
          <p className={classes.secondaryText}>
            {props.information.location ?? "Not Available"}
          </p>
        </div>
        <div className={classes.social}>
          <TwitterIcon className={classes.secondaryText} />
          <p className={classes.secondaryText}>
            {props.information.twitter_username ?? "Not Available"}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Profile;
