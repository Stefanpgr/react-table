import React, { useContext, Component } from "react";
import { useSelector } from "react-redux";
import DisplayTable from "./DisplayTable";
import { connect } from "react-redux";
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

const TableList = ({ posts }) => {
  const classes = useStyles();
  const Tables = useSelector(state => ({
    posts: state
  }));

  return (
    <div>
      <h1>Table Data</h1>
      <h6>Fill the form above to see updates below</h6>
      {console.log(Tables.posts.map(post => post.firstname), "hello")}

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
            {Tables.posts.map((table, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{table.firstname} </StyledTableCell>
                <StyledTableCell>{table.lastname}</StyledTableCell>
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
// const mapStateToProps = state => ({
//   posts: state
// });
// export default connect(mapStateToProps)(TableList);
export default TableList;
