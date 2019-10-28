import React, { Component } from "react";
import "./App.css";
// import Nav from "./Nav";
import TableList from "./TableList";
import TableForm from "./TableForm";
import Container from "@material-ui/core/Container";

// import AddData from "./AddData";
// import { TableProvider } from "./TableContext";

class App extends Component {
  render() {
    return (
      // <TableProvider>
      // <Nav />
      <Container maxWidth="sm">
        {/* <AddData /> */}

        <TableForm />
        <TableList />
      </Container>
      // </TableProvider>
    );
  }
}

export default App;
