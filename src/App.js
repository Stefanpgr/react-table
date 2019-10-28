import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import TableList from "./TableList";
import TableForm from "./TableForm";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container maxWidth="md">
          <TableForm />
          <TableList />
        </Container>
      </div>
    );
  }
}

export default App;
