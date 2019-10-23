import React, { useContext } from "react";
import { TableContext } from "./TableContext";
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
  const [data] = useContext(TableContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Table
          </Typography>
          Table Items: {data.length}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
