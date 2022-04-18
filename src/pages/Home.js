import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: "center",
    },
    container: {
      margin: "2em !important",
      flexDirection: "column !important",
    },
    card: {
      padding: "20px",
    },
    form: {
      padding: "20px",
    },
    formElement: {
      marginTop: "20px",
    },
    mainContainer: {
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ccc",
    },
  }));

  const [userName, setUserName] = useState("");

  const history = useHistory();
  const classes = useStyles();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/profile?user=${userName}`);
  };

  return (
    <div className={classes.mainContainer}>
      <Grid container className={classes.root}>
        <Grid item md={3} xs={12} className={classes.container}>
          <Paper elevaltion={10} className={classes.card}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div>
                <label>Enter Github UserName</label>
              </div>
              <div className={classes.formElement}>
                <TextField
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className={classes.formElement}>
                <Button type="submit" variant="contained" fullWidth>
                  Search
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
