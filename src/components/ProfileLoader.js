import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const ProfileLoader = () => {
  const useStyles = makeStyles((_) => ({
    root: {
      alignItems: "center",
      justifyContent: "center",
    },
    imageContainer: {
      display: "flex",
      alignItems: "center",
    },
    loader: {
      marginBottom: "10px !important",
    },
    detail: {
      "@media(max-width: 768px)": {
        marginTop: "10px !important",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={2} sm={12} xs={12} className={classes.imageContainer}>
        <Skeleton
          animation="wave"
          variant="circular"
          width={150}
          height={150}
        />
      </Grid>
      <Grid item md={10} sm={12} xs={12} className={classes.detail}>
        <Skeleton className={classes.loader} variant="text" width={150} />
        <Skeleton className={classes.loader} variant="text" width={100} />
        <Skeleton className={classes.loader} variant="text" width={100} />
      </Grid>
    </Grid>
  );
};

export default ProfileLoader;
