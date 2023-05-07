/* eslint-disable no-shadow */
// @mui material components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import Switch from "@mui/material/Switch";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Select, MenuItem, InputLabel } from "@mui/material";
// Material Dashboard 2 React components
import MDButton from "components/MDButton";
import { CourseContext } from "contexts/CourseContext";
import { useContext, useState } from "react";
import { UserContext } from "contexts/UserContext";

function CreateCourse() {
  const [expanded, setExpanded] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [category, setCategory] = useState({});
  const [coach, setCoach] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { categories, createCourse } = useContext(CourseContext);
  const { coaches } = useContext(UserContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggle = () => {
    setIsOnline(!isOnline);
  };
  const handleOnCreate = async ({
    title,
    description,
    startDate,
    endDate,
    maxStudents,
    isOnline,
    location,
    link,

    CategoryId,
    coachId,
  }) => {
    try {
      console.log("Request body from frontend:", {
        title,
        description,
        startDate,
        endDate,
        maxStudents,
        isOnline,
        location,
        link,

        CategoryId,
        coachId,
      }); // Add this line to log the request body

      await createCourse({
        title,
        description,
        startDate,
        endDate,
        maxStudents,
        isOnline,
        location,
        link,

        CategoryId,
        coachId,
      });
      // alert course created
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Card id="delete-account">
      <CardHeader
        title={
          <MDTypography variant="h6" fontWeight="medium">
            Create Course
          </MDTypography>
        }
        action={
          <MDButton variant="gradient" color="dark" onClick={handleExpandClick}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;add new course
          </MDButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleOnCreate({
                  title: event.target.title.value,
                  description: event.target.description.value,
                  startDate,
                  endDate,
                  maxStudents: 30,
                  isOnline,
                  location: event.target.location.value,
                  link: isOnline ? event.target.link.value : null,
                  CategoryId: event.target.category.value,
                  coachId: event.target.coach.value,
                });
              }}
            >
              <Box mb={2}>
                <TextField name="title" label="Title" fullWidth />
              </Box>
              <Box mb={2}>
                <TextField name="description" label="Description" multiline fullWidth />
              </Box>
              <Box mb={2}>
                <DatePicker
                  sx={{ width: 950 }}
                  label="Start Date"
                  name="startDate"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
              <Box mb={2}>
                <DatePicker
                  sx={{ width: 950 }}
                  label="End Date"
                  name="endDate"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
              <Box mb={2}>
                <FormControlLabel
                  control={<Switch color="primary" checked={isOnline} onChange={handleToggle} />}
                  label="Is Online?"
                />
                {isOnline && <TextField name="link" label="Link" fullWidth />}
              </Box>
              <Box mb={2}>
                <TextField name="location" label="Location" fullWidth disabled={isOnline} />
              </Box>
              <Box mb={2}>
                <InputLabel id="role-label">Category</InputLabel>
                <Select
                  name="category"
                  value={category}
                  label="Category ID"
                  sx={{ minWidth: "160px" }}
                  defaultValue=""
                  fullWidth
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box mb={2}>
                <InputLabel id="role-label">Coach</InputLabel>
                <Select
                  name="coach"
                  value={coach}
                  label="Coach ID"
                  sx={{ minWidth: "160px" }}
                  defaultValue="select value"
                  fullWidth
                  onChange={(event) => setCoach(event.target.value)}
                >
                  {coaches.map((coach) => (
                    <MenuItem key={coach.id} value={coach.id}>
                      {`${coach.firstName} ${coach.lastName}`}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <MDButton variant="gradient" color="dark" onClick={handleExpandClick}>
                  Close
                </MDButton>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <MDButton type="submit" variant="gradient" color="warning">
                    Finish
                  </MDButton>
                </Box>
              </CardActions>
            </form>
          </LocalizationProvider>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CreateCourse;
