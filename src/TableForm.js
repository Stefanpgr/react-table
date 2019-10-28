import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { FormHelperText } from "@material-ui/core";
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

  // const updateBday = (event, date) => {
  //   setState(date);
  // };

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
  let [Birthday, setBday] = useState(moment().format("l"));
  const handleSubmit = e => {
    e.preventDefault();
    const firstname = firstName;
    const lastname = lastName;
    const birthday = Birthday;
    const age = Age;
    const hobby = Hobby;
    const data = {
      id: new Date(),
      firstname,
      lastname,
      birthday,
      age,
      hobby
    };
    dispatch({
      type: "CREATE_NEW_DATA",
      data
    });
    firstName = "";
    lastName = "";
    Age = "";
    Hobby = "";
    Birthday = "";
    console.log(data);
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
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
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
            disabled
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
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            label="Birthday"
            placeholder="Birthday"
            value={Birthday}
            onChange={e => setBday(e.target.value)}
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

// class TableForm extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     const firstname = this.getFirstname.value;
//     const lastname = this.getLastname.value;
//     const birthday = this.getBirthday.value;
//     const age = this.getAge.value;
//     const hobby = this.getHobby.value;
//     const data = {
//       id: new Date(),
//       firstname,
//       lastname,
//       birthday,
//       age,
//       hobby
//     };
//     this.props.dispatch({
//       type: "CREATE_NEW_DATA",
//       data
//     });
//     this.getFirstname.value = "";
//     this.getLastname.value = "";
//     this.getBirthday.value = "";
//     this.getAge.value = "";
//     this.getHobby.value = "";
//     console.log(data);
//   };
//   render() {

//     return (
//       <div>
//         <h1>Create Table</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             required
//             type="text"
//             ref={input => (this.getFirstname = input)}
//             placeholder="Firstname"
//           />
//           <br />
//           <br />
//           <input
//             required
//             rows="5"
//             ref={input => (this.getLastname = input)}
//             placeholder="Lastname"
//           />
//           <input
//             required
//             rows="5"
//             ref={input => (this.getBirthday = input)}
//             type="date"
//             placeholder="DAte of birth"
//           />
//           <input
//             required
//             rows="5"
//             ref={input => (this.getAge = input)}
//             placeholder="Age"
//           />
//           <br />
//           <br />
//           <input
//             required
//             rows="5"
//             ref={input => (this.getHobby = input)}
//             placeholder="Hobby"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect()(TableForm);

export default TableForm;
