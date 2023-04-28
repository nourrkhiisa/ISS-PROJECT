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
import FormGroup from "@mui/material/FormGroup";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
// Material Dashboard 2 React components
import MDButton from "components/MDButton";

import { useState } from "react";

function CreateCourse() {
  const [expanded, setExpanded] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggle = () => {
    setIsOnline(!isOnline);
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
            <FormGroup>
              <Box mb={2}>
                <TextField label="Title" fullWidth />
              </Box>
              <Box mb={2}>
                <TextField label="Description" multiline fullWidth />
              </Box>
              <Box mb={2}>
                <DatePicker
                  sx={{ width: 950 }}
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
              <Box mb={2}>
                <DatePicker
                  sx={{ width: 950 }}
                  label="End Date"
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
                {isOnline && <TextField label="Link" fullWidth />}
              </Box>
              <Box mb={2}>
                <TextField label="Location" fullWidth disabled={isOnline} />
              </Box>
              <Box mb={2}>
                <TextField label="Category ID" fullWidth />
              </Box>
              <Box mb={2}>
                <TextField label="Coach ID" fullWidth />
              </Box>
            </FormGroup>
          </LocalizationProvider>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <MDButton variant="gradient" color="dark" onClick={handleExpandClick}>
            Close
          </MDButton>
          <MDButton variant="gradient" color="warning" onClick={handleExpandClick}>
            Finish
          </MDButton>
        </CardActions>
      </Collapse>
    </Card>
  );
}

export default CreateCourse;
