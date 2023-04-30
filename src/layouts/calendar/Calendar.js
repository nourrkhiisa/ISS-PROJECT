/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import moment from "moment";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import momentLocalizer from "react-big-calendar/lib/localizers/moment";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// Material Dashboard 2 React examples
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";

const localizer = momentLocalizer(moment);

const calendar = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);

  const addEvent = () => {
    // eslint-disable-next-line no-alert
    const eventTitle = prompt("Enter event title:");
    if (eventTitle) {
      const newEvent = {
        id: new Date().getTime(),
        title: eventTitle,
        start: date,
        end: moment(date).add(1, "hour").toDate(),
      };
      setEvents([...events, newEvent]);
    }
  };

  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const openDialog = (event) => {
    setEditedEvent(event);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setEditedEvent(null);
    setDialogOpen(false);
  };

  const editEvent = () => {
    if (editedEvent) {
      const updatedEvents = events.map((event) =>
        event.id === editedEvent.id ? { ...event, title: editedEvent.title } : event
      );
      setEvents(updatedEvents);
    }
    closeDialog();
  };

  const handleTitleChange = (e) => {
    if (editedEvent) {
      setEditedEvent({ ...editedEvent, title: e.target.value });
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <h2>Trainings Calendar</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            // eslint-disable-next-line no-console
            onSelectSlot={(slotInfo) => console.log(slotInfo)}
            onSelectEvent={(event) => openDialog(event)}
            style={{ height: 500 }}
          />
          <Button
            variant="contained"
            onClick={addEvent}
            style={{ marginTop: "1rem", color: "white" }}
          >
            Add Training
          </Button>
        </div>
        <Dialog open={dialogOpen} onClose={closeDialog}>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="event-title"
              label="Event Title"
              type="text"
              fullWidth
              value={editedEvent ? editedEvent.title : ""}
              onChange={handleTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="error">
              Cancel
            </Button>
            <Button onClick={() => deleteEvent(editedEvent.id)} color="error">
              Delete
            </Button>
            <Button onClick={editEvent} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </DashboardLayout>
  );
};

export default React.memo(calendar);
