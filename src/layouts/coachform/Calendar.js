// import React from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";

// function Calendar() {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Calendar</Typography>
//         <Typography variant="body2">Here is where the calendar will be.</Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default Calendar;

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@material-ui/core";

// const workshops = [
//   { id: 1, date: "2023-04-27", title: "Workshop 1" },
//   { id: 2, date: "2023-04-28", title: "Workshop 2" },
//   // more workshops...
// ];

// function Calendar() {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Workshop</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {workshops.map((workshop) => (
//             <TableRow key={workshop.id}>
//               <TableCell>{workshop.date}</TableCell>
//               <TableCell>{workshop.title}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Calendar;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

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
  button: {
    marginTop: theme.spacing(1),
  },
}));

const workshops = [
  { id: 1, date: "2023-04-27", title: "Workshop 1" },
  { id: 2, date: "2023-04-28", title: "Workshop 2" },
  // more workshops...
];

function Calendar() {
  const classes = useStyles();

  const handleAccessWorkshop = (id) => {
    // Handle the access to the workshop.
    // For instance, you could redirect to the workshop page.
    console.log(`Accessing workshop with id: ${id}`);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.title}>
        Upcoming Workshops
      </Typography>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell className={classes.headerCell}>Date</TableCell>
              <TableCell className={classes.headerCell}>Workshop</TableCell>
              <TableCell className={classes.headerCell}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workshops.map((workshop) => (
              <TableRow key={workshop.id}>
                <TableCell>{workshop.date}</TableCell>
                <TableCell>{workshop.title}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => handleAccessWorkshop(workshop.id)}
                  >
                    Access Workshop
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Calendar;
