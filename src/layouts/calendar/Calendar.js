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
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";

const useStyles = makeStyles({
  hoverCell: {
    "& .rbc-day-bg:hover": {
      backgroundColor: "#FAF9F6 !important",
    },
  },
});

const localizer = momentLocalizer(moment);

const calendar = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);
  const [duration, setDuration] = useState(60);

  const addEvent = () => {
    if (selectedDate) {
      const eventTitle = prompt("Enter event title:");
      if (eventTitle) {
        const newEvent = {
          id: new Date().getTime(),
          title: `${eventTitle} (${duration} min)`,
          start: selectedDate,
          end: moment(selectedDate).add(duration, "minutes").toDate(),
        };
        setEvents([...events, newEvent]);
      }
    } else {
      alert("Please select a date on the calendar.");
    }
  };

  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const openDialog = (event) => {
    setEditedEvent(event);
    setDialogOpen(true);
    setDuration(moment(event.end).diff(event.start, "minutes"));
  };

  const closeDialog = () => {
    setEditedEvent(null);
    setDialogOpen(false);
  };

  const editEvent = () => {
    if (editedEvent) {
      const updatedEvents = events.map((event) =>
        event.id === editedEvent.id
          ? {
              ...event,
              title: editedEvent.title,
              end: moment(editedEvent.start).add(duration, "minutes").toDate(),
            }
          : event
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
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
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
            className={classes.hoverCell}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
            onSelectEvent={(event) => openDialog(event)}
            style={{ height: 700 }}
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  id="event-duration"
                  label="Event Duration (minutes)"
                  type="number"
                  fullWidth
                  value={duration}
                  onChange={handleDurationChange}
                />
              </Grid>
            </Grid>
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
