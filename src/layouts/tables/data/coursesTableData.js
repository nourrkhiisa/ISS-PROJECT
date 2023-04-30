/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Rating } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import MDButton from "components/MDButton";
import { styled } from "@mui/material/styles";

// Create a styled FormControl component to make the border wider
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius * 2,
    height: 45,
  },
}));

function QuizDialog({ open, handleClose }) {
  const [course, setCourse] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: 0, uuid: uuidv4() }]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleQuestionChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (value, index) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = value;
    setQuestions(newQuestions);
    setForceUpdate(!forceUpdate); // Add this line
  };
  const handleCreate = () => {
    console.log(questions);
    handleClose();
    setQuestions([{ question: "", answer: 0 }]);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", answer: 0 }]);
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create Evaluation Quiz</DialogTitle>
      <DialogContent>
        <StyledFormControl fullWidth>
          <InputLabel id="course-select-label"> Course</InputLabel>
          <Select
            labelId="course-select-label"
            id="course-select"
            value={course}
            onChange={handleCourseChange}
            fullWidth
          >
            <MenuItem value="course1">Course 1</MenuItem>
            <MenuItem value="course2">Course 2</MenuItem>
            <MenuItem value="course3">Course 3</MenuItem>
          </Select>
        </StyledFormControl>

        {questions.map((q, index) => (
          <React.Fragment key={q.uuid}>
            <TextField
              key={`question-${q.uuid}`}
              margin="dense"
              id={`question-${index}`}
              label={`Question ${index + 1}`}
              type="text"
              fullWidth
              value={q.question}
              onChange={(event) => handleQuestionChange(event, index)}
            />
            <Rating
              value={q.answer}
              onChange={(event, value) => handleAnswerChange(value, index)}
              name={`rating-${q.uuid}`}
            />
          </React.Fragment>
        ))}
      </DialogContent>
      <DialogActions>
        <MDButton onClick={handleAddQuestion} color="neutral">
          Add Question
        </MDButton>
        <MDButton onClick={handleClose} color="black">
          Cancel
        </MDButton>
        <MDButton onClick={handleCreate} color="warning">
          Create
        </MDButton>
      </DialogActions>
    </Dialog>
  );
}

export default function data() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "course", accessor: "course", width: "30%", align: "left" },
      { Header: "attendees", accessor: "attendees", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Evaluation", accessor: "Evaluation", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        course: <Project image={LogoAsana} name="How to use Asana" />,
        attendees: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            25
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            In progress
          </MDTypography>
        ),
        Evaluation: (
          <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;quiz
          </MDButton>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        course: <Project image={logoGithub} name="How to use Github" />,
        attendees: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            30
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        Evaluation: (
          <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;quiz
          </MDButton>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        course: <Project image={logoAtlassian} name="About Atlassian" />,
        attendees: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            10
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        Evaluation: (
          <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;quiz
          </MDButton>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        course: <Project image={logoSpotify} name="About Spotify" />,
        attendees: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            40
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            In progress
          </MDTypography>
        ),
        Evaluation: (
          <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;quiz
          </MDButton>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        course: <Project image={logoSlack} name="How to use Slack" />,
        attendees: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            25
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        Evaluation: (
          <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;quiz
          </MDButton>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        course: <Project image={logoInvesion} name="About Invesion" />,
        attendees: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            28
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        Evaluation: (
          <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;quiz
          </MDButton>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
    renderDialog: () => <QuizDialog open={open} handleClose={handleClose} />,
  };
}
