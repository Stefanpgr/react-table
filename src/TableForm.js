import React, { useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import "./index.css";
import v4 from "uuid/v4";

const uuidv5 = require("uuid/v5");
const TableForm = () => {
  const dispatch = useDispatch();

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    button: {
      margin: theme.spacing(3)
    },
    formControl: {
      margin: theme.spacing(1)
    }
  }));

  const [labelWidth, setLabelWidth] = React.useState(0);

  const labelRef = React.useRef(0);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);
  let [firstName, setFname] = useState("");
  let [lastName, setLname] = useState("");
  let [Hobby, setHobby] = useState("");
  let [Age, setAge] = useState("");
  let [Birthday, setBday] = useState("01/01/1998");
  const MY_NAMESPACE = "36cceb95-967b - 4534 - adca - 84627824ceae";

  const handleSubmit = e => {
    e.preventDefault();

    const firstname = firstName;
    const lastname = lastName;
    const birthday = Birthday;
    const age = Age;
    const hobby = Hobby;
    const data = {
      firstname,
      lastname,
      birthday,
      age,
      hobby
    };

    axios
      .post(
        `https://us-central1-myfunctions-330ec.cloudfunctions.net/entries`,
        data
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    console.log("DATA SAVED");
    // dispatch({
    //   type: "CREATE_NEW_DATA"
    // });
  };

  return (
    <div>
      <h1>Create Table</h1>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <Input
            type="text"
            name="firstname"
            value={firstName}
            onChange={e => setFname(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <Input
            type="text"
            name="firstname"
            value={lastName}
            onChange={e => setLname(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">Age</InputLabel>
          <Input
            name="age"
            maxLength="4"
            size="4"
            type="number"
            value={Age}
            onChange={e => setAge(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">Hobby</InputLabel>
          <Input
            type="text"
            name="hobby"
            value={Hobby}
            onChange={e => setHobby(e.target.value)}
            required
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            required
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            label="Birthday"
            placeholder="Birthday"
            value={Birthday}
            onChange={(e, date) => {
              setBday(date);
              let getBdyear = date.split("/");
              let currYear = moment().year();
              let bdYear = Number(getBdyear[2]);
              let age = currYear - bdYear;
              setAge(age);
            }}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TableForm;
