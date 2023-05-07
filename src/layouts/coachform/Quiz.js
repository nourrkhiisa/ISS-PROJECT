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

function Quiz() {
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
    <Box
      style={{
        margin: "auto",
        width: "80%",
        marginTop: (theme) => theme.spacing(4),
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginBottom: (theme) => theme.spacing(4),
        }}
        align="center"
      >
        Create Your Quiz
      </Typography>
      <Card
        style={{
          marginBottom: (theme) => theme.spacing(2),
          padding: (theme) => theme.spacing(2),
        }}
      >
        <CardContent>
          <Button
            variant="contained"
            style={{
              marginRight: (theme) => theme.spacing(2),
            }}
            onClick={handleCreateQuiz}
          >
            Create Quiz
          </Button>
          {showForm && (
            <form
              onSubmit={handleAddQuestion}
              style={{ marginBottom: (theme) => theme.spacing(2) }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Question"
                autoFocus
                value={questionText}
                onChange={handleQuestionTextChange}
                style={{ marginBottom: (theme) => theme.spacing(2) }}
              />
              <Paper variant="outlined">
                <List>
                  {answerOptions.map((option, index) => (
                    <ListItem key={option.id}>
                      <FormControl
                        component="fieldset"
                        fullWidth
                        style={{ margin: (theme) => theme.spacing(1) }}
                      >
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
              <Box
                display="flex"
                justifyContent="flex-start"
                style={{ marginBottom: (theme) => theme.spacing(2) }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddOption}
                  style={{ marginRight: (theme) => theme.spacing(2) }}
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
        <Card
          key={question.id}
          style={{
            marginBottom: (theme) => theme.spacing(2),
            padding: (theme) => theme.spacing(2),
          }}
        >
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
        <Box
          display="flex"
          justifyContent="center"
          style={{ marginBottom: (theme) => theme.spacing(2) }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmitQuiz}>
            Submit Quiz
          </Button>
        </Box>
      )}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Select Workshop</DialogTitle>
        <DialogContent>
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
