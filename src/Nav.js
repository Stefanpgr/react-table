import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  }
}));
const Nav = () => {
  const data = useSelector(state => ({
    posts: state
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Table with Redux-Saga and Fiebase
          </Typography>
          Table Items: {data.posts.items.length}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
