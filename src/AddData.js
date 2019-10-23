import React, { useState, useContext } from "react";
import { TableContext } from "./TableContext";
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

const AddData = () => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");

  const [birthday, setState] = useState(moment().format("l"));
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [data, setData] = useContext(TableContext);
  const updateFname = e => {
    setFname(e.target.value);
  };

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

  const updateLname = e => {
    setLname(e.target.value);
  };
  const updateBday = (event, date) => {
    setState(date);
  };
  const updateAge = e => {
    setAge(e.target.value);
  };
  const updateHobby = e => {
    setHobby(e.target.value);
  };
  const [labelWidth, setLabelWidth] = React.useState(0);

  const labelRef = React.useRef(0);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);
  const addData = e => {
    e.preventDefault();
    setData(prevData => [
      ...prevData,
      {
        firstName: firstname,
        lastName: lastname,
        birthday: birthday,
        age: age,
        hobby: hobby
      }
    ]);
  };
  return (
    <div className={classes.container} autoComplete="off">
      <form onSubmit={addData}>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <Input
            type="text"
            name="firstname"
            value={firstname}
            onChange={updateFname}
          />
        </FormControl>

        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <Input name="lastname" value={lastname} onChange={updateLname} />
        </FormControl>
        <FormControl></FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">Age</InputLabel>
          <Input name="age" type="number" value={age} onChange={updateAge} />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="component-simple">Hobby</InputLabel>
          <Input
            type="text"
            name="hobby"
            value={hobby}
            onChange={updateHobby}
            required
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            label="Birthday"
            placeholder="Birthday"
            value={birthday}
            onChange={updateBday}
            required
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

export default AddData;
