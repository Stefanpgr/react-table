import React from "react";
import { useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
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

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  },
  paper: {
    margin: "auto",
    width: "100%"
  }
});
const TableList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const Tables = useSelector(state => ({
    posts: state
  }));
  console.log(Tables.posts.items);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <h1>Table Data</h1>
      {/* <h6>Fill the form above to see updates below</h6> */}

      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User ID</StyledTableCell>
                <StyledTableCell>Firstname</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Birthday</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Hobby</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Tables.posts.items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((table, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{table.id} </StyledTableCell>
                    <StyledTableCell>{table.firstname} </StyledTableCell>
                    <StyledTableCell>{table.lastname}</StyledTableCell>
                    <StyledTableCell>{table.birthday}</StyledTableCell>
                    <StyledTableCell>{table.age}</StyledTableCell>
                    <StyledTableCell>{table.hobby}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 100]}
          component="div"
          count={Tables.posts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default TableList;
