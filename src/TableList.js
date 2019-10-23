import React, { useContext } from "react";
// import TableElement from "./TableElement";
import { TableContext } from "./TableContext";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const TableList = () => {
  const [Tables] = useContext(TableContext);
  const classes = useStyles;

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Firstname</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Birthday</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Hobby</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Tables.map((table, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{table.firstName} </StyledTableCell>
                <StyledTableCell>{table.lastName}</StyledTableCell>
                <StyledTableCell>{table.birthday}</StyledTableCell>
                <StyledTableCell>{table.age}</StyledTableCell>
                <StyledTableCell>{table.hobby}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default TableList;
