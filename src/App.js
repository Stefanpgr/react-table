import React from "react";
import "./App.css";
import Nav from "./Nav";
import TableList from "./TableList";
import Container from "@material-ui/core/Container";

import AddData from "./AddData";
import { TableProvider } from "./TableContext";

function App() {
  return (
    <TableProvider>
      <Nav />
      <Container maxWidth="sm">
        <AddData />
        <TableList />
      </Container>
    </TableProvider>
  );
}

export default App;
