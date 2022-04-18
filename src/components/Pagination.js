import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const PaginationComponent = (props) => {
  const useStyles = makeStyles((_) => ({
    root: {
      marginTop: "2em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();
  return (
    <Stack spacing={2} className={classes.root}>
      <Pagination
        count={props.pages}
        showFirstButton
        showLastButton
        page={props.currentPage}
        onChange={props.onPageChange}
        size="small"
      />
    </Stack>
  );
};

export default PaginationComponent;
