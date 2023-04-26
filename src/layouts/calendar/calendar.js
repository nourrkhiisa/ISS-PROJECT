// import React, { useState } from "react";
// import { Box, Typography, IconButton, Grid, Container, Paper, Divider } from "@mui/material";
// import {
//   format,
//   startOfWeek,
//   add,
//   sub,
//   startOfMonth,
//   endOfMonth,
//   eachDayOfInterval,
//   isSameMonth,
//   isSameDay,
// } from "date-fns";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const renderHeader = () => {
//     const dateFormat = "MMMM yyyy";

//     return (
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//         <IconButton onClick={() => setCurrentDate(sub(currentDate, { months: 1 }))}>
//           <ChevronLeft />
//         </IconButton>
//         <Typography variant="h5" component="span">
//           {format(currentDate, dateFormat)}
//         </Typography>
//         <IconButton onClick={() => setCurrentDate(add(currentDate, { months: 1 }))}>
//           <ChevronRight />
//         </IconButton>
//       </Box>
//     );
//   };

//   const renderDaysOfWeek = () => {
//     const dateFormat = "EEE";
//     const days = [];

//     const startDate = startOfWeek(currentDate);

//     for (let i = 0; i < 7; i += 1) {
//       days.push(
//         <Grid item xs key={i}>
//           <Typography variant="subtitle1" align="center">
//             {format(add(startDate, { days: i }), dateFormat)}
//           </Typography>
//         </Grid>
//       );
//     }

//     return (
//       <Grid container spacing={1}>
//         {days}
//       </Grid>
//     );
//   };

//   const renderCells = () => {
//     const currentMonth = startOfMonth(currentDate);
//     const lastDate = endOfMonth(currentMonth);
//     const startDate = startOfWeek(currentMonth);

//     const days = eachDayOfInterval({
//       start: startDate,
//       end: lastDate,
//     });

//     const cells = days.map((day) => {
//       const isCurrentMonth = isSameMonth(day, currentMonth);
//       const isToday = isSameDay(day, new Date());
//       const backgroundColor = isCurrentMonth ? "transparent" : "action.hover";
//       const textColor = isToday ? "secondary.main" : "text.primary";

//       return (
//         <Grid item xs key={day.toString()}>
//           <Paper
//             square
//             elevation={isCurrentMonth && isToday ? 3 : 1}
//             style={{
//               backgroundColor,
//               textAlign: "center",
//               color: textColor,
//               padding: 8,
//             }}
//           >
//             {format(day, "d")}
//           </Paper>
//         </Grid>
//       );
//     });

//     return (
//       <Grid container spacing={1}>
//         {cells}
//       </Grid>
//     );
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={4}>
//         <Typography variant="h4" component="h1" align="center" gutterBottom>
//           Calendar
//         </Typography>
//         <Divider />
//         {renderHeader()}
//         {renderDaysOfWeek()}
//         {renderCells()}
//       </Box>
//     </Container>
//   );
// };

// export default calendar;

// import React from "react";
// import { Container } from "@mui/material";
// import DateCalendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import ServerDay from "./ServerDay";
// import DayCalendarSkeleton from "./DayCalendarSkeleton";

// const calendar = () => {
//   const initialValue = new Date();

//   const highlightedDays = [new Date("2023-05-10"), new Date("2023-05-15"), new Date("2023-05-20")];

//   const handleMonthChange = () => {
//     // Implement any month change logic here, such as fetching data from a server
//   };

//   return (
//     <Container maxWidth="sm">
//       <DateCalendar
//         defaultValue={initialValue}
//         onMonthChange={handleMonthChange}
//         renderLoading={() => <DayCalendarSkeleton />}
//         slots={{
//           day: ServerDay,
//         }}
//         slotProps={{
//           day: {
//             highlightedDays,
//           },
//         }}
//       />
//     </Container>
//   );
// };

// export default calendar;

import React, { useState } from "react";
import { Box, Typography, IconButton, Grid, Container, Paper, Divider } from "@mui/material";
import {
  format,
  startOfWeek,
  add,
  sub,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <IconButton onClick={() => setCurrentDate(sub(currentDate, { months: 1 }))}>
          <ChevronLeft />
        </IconButton>
        <Typography variant="h5" component="span">
          {format(currentDate, dateFormat)}
        </Typography>
        <IconButton onClick={() => setCurrentDate(add(currentDate, { months: 1 }))}>
          <ChevronRight />
        </IconButton>
      </Box>
    );
  };

  const renderDaysOfWeek = () => {
    const dateFormat = "EEE";
    const days = [];

    const startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i += 1) {
      days.push(
        <Grid item xs key={i}>
          <Typography variant="subtitle1" align="center" fontWeight="bold">
            {format(add(startDate, { days: i }), dateFormat)}
          </Typography>
        </Grid>
      );
    }

    return (
      <Grid container spacing={1}>
        {days}
      </Grid>
    );
  };

  const renderCells = () => {
    const currentMonth = startOfMonth(currentDate);
    const lastDate = endOfMonth(currentMonth);
    const startDate = startOfWeek(currentMonth);

    const days = eachDayOfInterval({
      start: startDate,
      end: lastDate,
    });

    const cells = days.map((day) => {
      const isCurrentMonth = isSameMonth(day, currentMonth);
      const isToday = isSameDay(day, new Date());
      const backgroundColor = isCurrentMonth ? "transparent" : "action.hover";
      const textColor = isToday ? "secondary.main" : "text.primary";

      return (
        <Grid item xs key={day.toString()}>
          <Paper
            square
            elevation={isCurrentMonth && isToday ? 3 : 1}
            style={{
              backgroundColor,
              textAlign: "center",
              color: textColor,
              padding: 8,
            }}
          >
            {format(day, "d")}
          </Paper>
        </Grid>
      );
    });

    return (
      <Grid container spacing={1}>
        {cells}
      </Grid>
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Calendar
          </Typography>
          <Divider />
          {renderHeader()}
          {renderDaysOfWeek()}
          {renderCells()}
        </Box>
      </Container>
    </DashboardLayout>
  );
};

export default calendar;
