import React from "react";
import Grid from "@mui/material/Grid";
import RepositoryCard from "./RepositoryCard";
import PaginationComponent from "./Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";

const Repository = (props) => {
  const useStyles = makeStyles((_) => ({
    root: {
      marginTop: "2em !important",
    },
    item: {},
    dropdown: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    title: {
      color: "#1565c0",
    },
  }));

  const [perPage, setPerPage] = React.useState(props.itemsPerPage);
  const repositories = props.repositories;

  const classes = useStyles();

  const handlePerPageChange = (e) => {
    setPerPage(e.target.value);
    props.onItemPerPageChange(e.target.value);
  };

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item md={3} xs={6}>
        <h1 className={classes.title}>Repositories</h1>
      </Grid>
      <Grid item md={9} xs={6} className={classes.dropdown}>
        <FormControl sx={{ m: 1, width: 100 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Items per page
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            variant="standard"
            value={perPage}
            onChange={handlePerPageChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {repositories.map((data, i) => {
        return (
          <Grid item md={6} sm={12} xs={12} className={classes.item} key={i}>
            <RepositoryCard data={data} />
          </Grid>
        );
      })}
      <Grid item md={12} xs={12}>
        <PaginationComponent
          pages={props.pages}
          currentPage={props.currentPage}
          onPageChange={props.onPageChange}
        />
      </Grid>
    </Grid>
  );
};

export default Repository;
