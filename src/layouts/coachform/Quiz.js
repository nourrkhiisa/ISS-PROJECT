import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "80%",
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  formElement: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
    backgroundcolor: "dark",
  },
  dialogContent: {
    minWidth: "200px",
  },
}));

function Quiz() {
  const classes = useStyles();

  const [showForm, setShowForm] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [questionText, setQuestionText] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState("");

  const handleCreateQuiz = () => {
    setShowForm(!showForm);
  };

  const handleAddQuestion = (event) => {
    event.preventDefault();

    const newQuestion = {
      id: uuidv4(),
      question: questionText,
      options: answerOptions,
    };

    setQuestions([...questions, newQuestion]);

    setQuestionText("");
    setAnswerOptions([]);
  };

  const handleQuestionTextChange = (event) => {
    setQuestionText(event.target.value);
  };

  const handleOptionTextChange = (event, id) => {
    const newOptions = [...answerOptions];
    const optionIndex = newOptions.findIndex((option) => option.id === id);
    newOptions[optionIndex] = { ...newOptions[optionIndex], text: event.target.value };
    setAnswerOptions(newOptions);
  };

  const handleAddOption = () => {
    setAnswerOptions([...answerOptions, { id: uuidv4(), text: "" }]);
  };

  const handleDeleteOption = (id) => {
    const newOptions = answerOptions.filter((option) => option.id !== id);
    setAnswerOptions(newOptions);
  };

  const handleDeleteQuestion = (id) => {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
  };

  const handleSubmitQuiz = (event) => {
    event.preventDefault();

    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleWorkshopChange = (event) => {
    setSelectedWorkshop(event.target.value);
  };

  const handleConfirm = () => {
    console.log(selectedWorkshop, questions);

    setSelectedWorkshop("");
    setQuestions([]);
    setOpenDialog(false);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title} align="center">
        Create Your Quiz
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
            Create Quiz
          </Button>
          {showForm && (
            <form onSubmit={handleAddQuestion} className={classes.formElement}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Question"
                autoFocus
                value={questionText}
                onChange={handleQuestionTextChange}
                className={classes.formElement}
              />
              <Paper variant="outlined">
                <List>
                  {answerOptions.map((option, index) => (
                    <ListItem key={option.id}>
                      <FormControl component="fieldset" fullWidth className={classes.formControl}>
                        <RadioGroup>
                          <FormControlLabel
                            value={option.text}
                            control={<Radio />}
                            label={
                              <TextField
                                fullWidth
                                placeholder={`Option ${index + 1}`}
                                value={option.text}
                                onChange={(event) => handleOptionTextChange(event, option.id)}
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                      <ListItemSecondaryAction>
                        <IconButton
                          color="secondary"
                          aria-label="delete"
                          onClick={() => handleDeleteOption(option.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Paper>
              <Box display="flex" justifyContent="flex-start" className={classes.formElement}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddOption}
                  className={classes.button}
                >
                  Add Option
                </Button>
                <Button variant="contained" color="primary" type="submit" disabled={!questionText}>
                  Add Question
                </Button>
              </Box>
            </form>
          )}
        </CardContent>
      </Card>
      {questions.map((question) => (
        <Card key={question.id} className={classes.card}>
          <CardContent>
            <Typography variant="h6">{question.question}</Typography>
            <IconButton
              color="secondary"
              aria-label="delete"
              onClick={() => handleDeleteQuestion(question.id)}
            >
              <DeleteIcon />
            </IconButton>
            <List>
              {question.options.map((option, index) => (
                <ListItem key={option.id} alignItems="flex-start">
                  <ListItemText primary={`${index + 1}. ${option.text}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
      {questions.length > 0 && (
        <Box display="flex" justifyContent="center" className={classes.formElement}>
          <Button variant="contained" color="primary" onClick={handleSubmitQuiz}>
            Submit Quiz
          </Button>
        </Box>
      )}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Select Workshop</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <FormControl fullWidth>
            <Select value={selectedWorkshop} onChange={handleWorkshopChange}>
              <MenuItem value="">-- Please select --</MenuItem>
              <MenuItem value="workshop1">Workshop 1</MenuItem>
              <MenuItem value="workshop2">Workshop 2</MenuItem>
              <MenuItem value="workshop3">Workshop 3</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" disabled={!selectedWorkshop}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Quiz;
