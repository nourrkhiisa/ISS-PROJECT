import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UpdateIcon from "@mui/icons-material/Update";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    marginBottom: theme.spacing(2),
  },
  inline: {
    display: "inline",
  },
}));

const notifications = [
  {
    id: 1,
    title: "Workshop Enrolled",
    description: "You have successfully enrolled in the Python workshop.",
    icon: <CheckCircleIcon />,
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Workshop Update",
    description: "The Data Analysis with R workshop has been rescheduled.",
    icon: <UpdateIcon />,
    time: "30 mins ago",
  },
  {
    id: 3,
    title: "New Workshop",
    description: "A new workshop on Machine Learning has been added.",
    icon: <NewReleasesIcon />,
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Account Update",
    description: "Your account details have been successfully updated.",
    icon: <InfoIcon />,
    time: "3 hours ago",
  },
];

function Notifications() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {notifications.map((notification, index) => (
        <React.Fragment key={notification.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{notification.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={notification.title}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {notification.description}
                  </Typography>
                  {` — ${notification.time}`}
                </>
              }
            />
          </ListItem>
          {index < notifications.length - 1 && <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}

export default Notifications;
