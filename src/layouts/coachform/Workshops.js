import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  headerCell: {
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  completed: {
    color: "green",
  },
  notCompleted: {
    color: "red",
  },
}));

const workshops = [
  { id: 1, name: "Workshop 1", date: "2023-04-27", attendees: 50, completed: true },
  { id: 2, name: "Workshop 2", date: "2023-04-28", attendees: 30, completed: false },
  // more workshops...
];

function Workshops() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.title}>
        Workshops
      </Typography>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell className={classes.headerCell}>Name</TableCell>
              <TableCell className={classes.headerCell}>Date</TableCell>
              <TableCell className={classes.headerCell}>Attendees</TableCell>
              <TableCell className={classes.headerCell}>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workshops.map((workshop) => (
              <TableRow key={workshop.id}>
                <TableCell>{workshop.name}</TableCell>
                <TableCell>{workshop.date}</TableCell>
                <TableCell>{workshop.attendees}</TableCell>
                <TableCell>
                  {workshop.completed ? (
                    <CheckCircleIcon className={classes.completed} />
                  ) : (
                    <CancelIcon className={classes.notCompleted} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Workshops;
