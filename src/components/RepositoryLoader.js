import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
const RepositoryLoader = () => {
  return (
    <Grid container style={{ marginTop: "2em" }} spacing={5}>
      {[1, 2, 3, 4].map((_, i) => (
        <Grid item md={6} xs={12} key={i}>
          <Skeleton variant="rectangle" sx={{ height: 150 }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoryLoader;
