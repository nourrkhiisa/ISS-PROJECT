// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useState } from "react";
import Card from "@mui/material/Card";
// Calendar component and related styles
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarDashboard() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox p={3}>
        <MDTypography variant="h6" gutterBottom>
          Trainings Calendar
        </MDTypography>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          selectable
          // eslint-disable-next-line no-console
          onSelectSlot={(slotInfo) =>
            addEvent({
              id: new Date().getTime(),
              title: "New Training",
              start: slotInfo.start,
              end: slotInfo.end,
            })
          }
          style={{ height: 500 }}
        />
        <MDBox display="flex" justifyContent="center" alignItems="center" my={3} />
      </MDBox>
    </Card>
  );
}

export default CalendarDashboard;
