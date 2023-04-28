// // import React from "react";
// // import { Card, CardContent, Typography, Button } from "@material-ui/core";

// // function Quiz() {
// //   return (
// //     <Card>
// //       <CardContent>
// //         <Typography variant="h5">Quiz</Typography>
// //         <Typography variant="body2">Here is where the quiz creation will be.</Typography>
// //         <Button variant="contained" color="primary">
// //           Create Quiz
// //         </Button>
// //       </CardContent>
// //     </Card>
// //   );
// // }

// // export default Quiz;

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
// } from "@material-ui/core";

// function Quiz() {
//   const [showForm, setShowForm] = useState(false);

//   const handleCreateQuiz = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Quiz</Typography>
//         <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
//           Create Quiz
//         </Button>
//         {showForm && (
//           <form>
//             <TextField variant="outlined" margin="normal" fullWidth label="Question" autoFocus />
//             <FormControl component="fieldset" fullWidth>
//               <RadioGroup>
//                 <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
//                 <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
//                 <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
//                 <FormControlLabel value="option4" control={<Radio />} label="Option 4" />
//               </RadioGroup>
//             </FormControl>
//             <Button variant="contained" color="primary">
//               Add Question
//             </Button>
//           </form>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default Quiz;

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
// } from "@material-ui/core";
// import { v4 as uuidv4 } from "uuid";

// function Quiz() {
//   const [showForm, setShowForm] = useState(false);
//   const [questions, setQuestions] = useState([]);

//   const [questionText, setQuestionText] = useState("");
//   const [answerOptions, setAnswerOptions] = useState([]);

//   const handleCreateQuiz = () => {
//     setShowForm(!showForm);
//   };

//   const handleAddQuestion = (event) => {
//     event.preventDefault();

//     const newQuestion = {
//       id: uuidv4(),
//       question: questionText,
//       options: answerOptions,
//     };

//     setQuestions([...questions, newQuestion]);

//     setQuestionText("");
//     setAnswerOptions([]);
//   };

//   const handleQuestionTextChange = (event) => {
//     setQuestionText(event.target.value);
//   };

//   const handleOptionTextChange = (event, id) => {
//     const newOptions = [...answerOptions];
//     const optionIndex = newOptions.findIndex((option) => option.id === id);
//     newOptions[optionIndex] = { ...newOptions[optionIndex], text: event.target.value };
//     setAnswerOptions(newOptions);
//   };

//   const handleAddOption = () => {
//     setAnswerOptions([...answerOptions, { id: uuidv4(), text: "" }]);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Quiz</Typography>
//         <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
//           Create Quiz
//         </Button>
//         {showForm && (
//           <form onSubmit={handleAddQuestion}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               label="Question"
//               autoFocus
//               value={questionText}
//               onChange={handleQuestionTextChange}
//             />
//             {answerOptions.map((option) => (
//               <FormControl key={option.id} component="fieldset" fullWidth>
//                 <RadioGroup
//                   value={option.text}
//                   onChange={(event) => handleOptionTextChange(event, option.id)}
//                 >
//                   <FormControlLabel
//                     value={option.text}
//                     control={<Radio />}
//                     label={`Option ${option.index + 1}`}
//                   />
//                 </RadioGroup>
//               </FormControl>
//             ))}
//             <Button variant="contained" color="primary" onClick={handleAddOption}>
//               Add Option
//             </Button>
//             <Button variant="contained" color="primary" type="submit">
//               Add Question
//             </Button>
//           </form>
//         )}
//         {questions.map((question) => (
//           <div key={question.id}>
//             <Typography variant="h6">{question.question}</Typography>
//             <ul>
//               {question.options.map((option) => (
//                 <li key={option.id}>{option.text}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }

// export default Quiz;

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Grid,
//   IconButton,
//   makeStyles,
// } from "@material-ui/core";
// import { v4 as uuidv4 } from "uuid";
// import DeleteIcon from "@material-ui/icons/Delete";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     marginTop: theme.spacing(2),
//   },
//   option: {
//     marginBottom: theme.spacing(2),
//   },
//   question: {
//     marginBottom: theme.spacing(3),
//   },
// }));

// function Quiz() {
//   const classes = useStyles();

//   const [showForm, setShowForm] = useState(false);
//   const [questions, setQuestions] = useState([]);

//   const [questionText, setQuestionText] = useState("");
//   const [answerOptions, setAnswerOptions] = useState([]);

//   const handleCreateQuiz = () => {
//     setShowForm(!showForm);
//   };

//   const handleAddQuestion = (event) => {
//     event.preventDefault();

//     const newQuestion = {
//       id: uuidv4(),
//       question: questionText,
//       options: answerOptions,
//     };

//     setQuestions([...questions, newQuestion]);

//     setQuestionText("");
//     setAnswerOptions([]);
//   };

//   const handleQuestionTextChange = (event) => {
//     setQuestionText(event.target.value);
//   };

//   const handleOptionTextChange = (event, id) => {
//     const newOptions = [...answerOptions];
//     const optionIndex = newOptions.findIndex((option) => option.id === id);
//     newOptions[optionIndex] = { ...newOptions[optionIndex], text: event.target.value };
//     setAnswerOptions(newOptions);
//   };

//   const handleAddOption = () => {
//     setAnswerOptions([...answerOptions, { id: uuidv4(), text: "" }]);
//   };

//   const handleDeleteOption = (id) => {
//     const newOptions = answerOptions.filter((option) => option.id !== id);
//     setAnswerOptions(newOptions);
//   };

//   const handleDeleteQuestion = (id) => {
//     const newQuestions = questions.filter((question) => question.id !== id);
//     setQuestions(newQuestions);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Quiz
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
//           Create Quiz
//         </Button>
//         {showForm && (
//           <form onSubmit={handleAddQuestion} className={classes.form}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               label="Question"
//               autoFocus
//               value={questionText}
//               onChange={handleQuestionTextChange}
//               className={classes.question}
//             />
//             <Grid container spacing={2} alignItems="center">
//               {answerOptions.map((option) => (
//                 <Grid item xs={11} key={option.id} className={classes.option}>
//                   <FormControl component="fieldset" fullWidth>
//                     <RadioGroup
//                       value={option.text}
//                       onChange={(event) => handleOptionTextChange(event, option.id)}
//                     >
//                       <FormControlLabel
//                         value={option.text}
//                         control={<Radio />}
//                         label={
//                           <TextField
//                             fullWidth
//                             placeholder={`Option ${option.index + 1}`}
//                             value={option.text}
//                             onChange={(event) => handleOptionTextChange(event, option.id)}
//                           />
//                         }
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                   <IconButton
//                     color="secondary"
//                     aria-label="delete"
//                     onClick={() => handleDeleteOption(option.id)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Grid>
//               ))}
//             </Grid>
//             <Button variant="contained" color="primary" onClick={handleAddOption}>
//               Add Option
//             </Button>
//             <Button variant="contained" color="primary" type="submit" disabled={!questionText}>
//               Add Question
//             </Button>
//           </form>
//         )}
//         {questions.map((question) => (
//           <div key={question.id} className={classes.question}>
//             <Typography variant="h6">{question.question}</Typography>
//             <ul>
//               {question.options.map((option) => (
//                 <li key={option.id}>{option.text}</li>
//               ))}
//             </ul>
//             <IconButton
//               color="secondary"
//               aria-label="delete"
//               onClick={() => handleDeleteQuestion(question.id)}
//             >
//               <DeleteIcon />
//             </IconButton>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }

// export default Quiz;

/* good version */

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   IconButton,
//   makeStyles,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@material-ui/core";
// import { v4 as uuidv4 } from "uuid";
// import DeleteIcon from "@material-ui/icons/Delete";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//   },
//   option: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(1),
//   },
//   optionInput: {
//     flexGrow: 1,
//   },
//   question: {
//     marginBottom: theme.spacing(3),
//   },
//   questionHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// }));

// function Quiz() {
//   const classes = useStyles();

//   const [showForm, setShowForm] = useState(false);
//   const [questions, setQuestions] = useState([]);

//   const [questionText, setQuestionText] = useState("");
//   const [answerOptions, setAnswerOptions] = useState([]);

//   const handleCreateQuiz = () => {
//     setShowForm(!showForm);
//   };

//   const handleAddQuestion = (event) => {
//     event.preventDefault();

//     const newQuestion = {
//       id: uuidv4(),
//       question: questionText,
//       options: answerOptions,
//     };

//     setQuestions([...questions, newQuestion]);

//     setQuestionText("");
//     setAnswerOptions([]);
//   };

//   const handleQuestionTextChange = (event) => {
//     setQuestionText(event.target.value);
//   };

//   const handleOptionTextChange = (event, id) => {
//     const newOptions = [...answerOptions];
//     const optionIndex = newOptions.findIndex((option) => option.id === id);
//     newOptions[optionIndex] = { ...newOptions[optionIndex], text: event.target.value };
//     setAnswerOptions(newOptions);
//   };

//   const handleAddOption = () => {
//     setAnswerOptions([...answerOptions, { id: uuidv4(), text: "" }]);
//   };

//   const handleDeleteOption = (id) => {
//     const newOptions = answerOptions.filter((option) => option.id !== id);
//     setAnswerOptions(newOptions);
//   };

//   const handleDeleteQuestion = (id) => {
//     const newQuestions = questions.filter((question) => question.id !== id);
//     setQuestions(newQuestions);
//   };

//   const handleSubmitQuiz = (event) => {
//     event.preventDefault();

//     // Here you can do whatever you want with the final quiz data, such as
//     // sending it to a server or displaying it on the screen.

//     console.log(questions);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Quiz
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
//           Create Quiz
//         </Button>
//         {showForm && (
//           <form onSubmit={handleAddQuestion} className={classes.form}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               label="Question"
//               autoFocus
//               value={questionText}
//               onChange={handleQuestionTextChange}
//               className={classes.question}
//             />
//             <Paper variant="outlined" className={classes.option}>
//               <List>
//                 {answerOptions.map((option, index) => (
//                   <ListItem key={option.id}>
//                     <FormControl component="fieldset" fullWidth>
//                       <RadioGroup>
//                         <FormControlLabel
//                           value={option.text}
//                           control={<Radio />}
//                           label={
//                             <TextField
//                               fullWidth
//                               placeholder={`Option ${index + 1}`}
//                               value={option.text}
//                               onChange={(event) => handleOptionTextChange(event, option.id)}
//                               className={classes.optionInput}
//                             />
//                           }
//                         />
//                       </RadioGroup>
//                     </FormControl>
//                     <ListItemSecondaryAction>
//                       <IconButton
//                         color="secondary"
//                         aria-label="delete"
//                         onClick={() => handleDeleteOption(option.id)}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </ListItemSecondaryAction>
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//             <Button variant="contained" color="primary" onClick={handleAddOption}>
//               Add Option
//             </Button>
//             <Button variant="contained" color="primary" type="submit" disabled={!questionText}>
//               Add Question
//             </Button>
//           </form>
//         )}
//         {questions.map((question) => (
//           <Paper key={question.id} variant="outlined" className={classes.question}>
//             <div className={classes.questionHeader}>
//               <Typography variant="h6">{question.question}</Typography>
//               <IconButton
//                 color="secondary"
//                 aria-label="delete"
//                 onClick={() => handleDeleteQuestion(question.id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </div>
//             <List>
//               {question.options.map((option, index) => (
//                 <ListItem key={option.id} alignItems="flex-start">
//                   <ListItemText primary={`${index + 1}. ${option.text}`} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         ))}
//         {questions.length > 0 && (
//           <form onSubmit={handleSubmitQuiz} className={classes.form}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit Quiz
//             </Button>
//           </form>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default Quiz;

/* good version */

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   IconButton,
//   makeStyles,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
//   Select,
// } from "@material-ui/core";
// import { v4 as uuidv4 } from "uuid";
// import DeleteIcon from "@material-ui/icons/Delete";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//   },
//   option: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(1),
//   },
//   optionInput: {
//     flexGrow: 1,
//   },
//   question: {
//     marginBottom: theme.spacing(3),
//   },
//   questionHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// }));

// function Quiz() {
//   const classes = useStyles();

//   const [showForm, setShowForm] = useState(false);
//   const [questions, setQuestions] = useState([]);

//   const [questionText, setQuestionText] = useState("");
//   const [answerOptions, setAnswerOptions] = useState([]);

//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedWorkshop, setSelectedWorkshop] = useState("");

//   const handleCreateQuiz = () => {
//     setShowForm(!showForm);
//   };

//   const handleAddQuestion = (event) => {
//     event.preventDefault();

//     const newQuestion = {
//       id: uuidv4(),
//       question: questionText,
//       options: answerOptions,
//     };

//     setQuestions([...questions, newQuestion]);

//     setQuestionText("");
//     setAnswerOptions([]);
//   };

//   const handleQuestionTextChange = (event) => {
//     setQuestionText(event.target.value);
//   };

//   const handleOptionTextChange = (event, id) => {
//     const newOptions = [...answerOptions];
//     const optionIndex = newOptions.findIndex((option) => option.id === id);
//     newOptions[optionIndex] = { ...newOptions[optionIndex], text: event.target.value };
//     setAnswerOptions(newOptions);
//   };

//   const handleAddOption = () => {
//     setAnswerOptions([...answerOptions, { id: uuidv4(), text: "" }]);
//   };

//   const handleDeleteOption = (id) => {
//     const newOptions = answerOptions.filter((option) => option.id !== id);
//     setAnswerOptions(newOptions);
//   };

//   const handleDeleteQuestion = (id) => {
//     const newQuestions = questions.filter((question) => question.id !== id);
//     setQuestions(newQuestions);
//   };

//   const handleSubmitQuiz = (event) => {
//     event.preventDefault();

//     // Here you can do whatever you want with the final quiz data, such as
//     // sending it to a server or displaying it on the screen.

//     setOpenDialog(true);
//   };

//   const handleDialogClose = () => {
//     setOpenDialog(false);
//   };

//   const handleWorkshopChange = (event) => {
//     setSelectedWorkshop(event.target.value);
//   };

//   const handleConfirm = () => {
//     // Here you can do whatever you want with the selected workshop and quiz data.
//     console.log(selectedWorkshop, questions);

//     setSelectedWorkshop("");
//     setQuestions([]);
//     setOpenDialog(false);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Quiz</Typography>
//         <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
//           Create Quiz
//         </Button>
//         {showForm && (
//           <form onSubmit={handleAddQuestion}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               label="Question"
//               autoFocus
//               value={questionText}
//               onChange={handleQuestionTextChange}
//             />
//             <Paper variant="outlined" className={classes.option}>
//               <List>
//                 {answerOptions.map((option, index) => (
//                   <ListItem key={option.id}>
//                     <FormControl component="fieldset" fullWidth>
//                       <RadioGroup>
//                         <FormControlLabel
//                           value={option.text}
//                           control={<Radio />}
//                           label={
//                             <TextField
//                               fullWidth
//                               placeholder={`Option ${index + 1}`}
//                               value={option.text}
//                               onChange={(event) => handleOptionTextChange(event, option.id)}
//                               className={classes.optionInput}
//                             />
//                           }
//                         />
//                       </RadioGroup>
//                     </FormControl>
//                     <ListItemSecondaryAction>
//                       <IconButton
//                         color="secondary"
//                         aria-label="delete"
//                         onClick={() => handleDeleteOption(option.id)}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </ListItemSecondaryAction>
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//             <Button variant="contained" color="primary" onClick={handleAddOption}>
//               Add Option
//             </Button>
//             <Button variant="contained" color="primary" type="submit" disabled={!questionText}>
//               Add Question
//             </Button>
//           </form>
//         )}
//         {questions.map((question) => (
//           <Paper key={question.id} variant="outlined" className={classes.question}>
//             <div className={classes.questionHeader}>
//               <Typography variant="h6">{question.question}</Typography>
//               <IconButton
//                 color="secondary"
//                 aria-label="delete"
//                 onClick={() => handleDeleteQuestion(question.id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </div>
//             <List>
//               {question.options.map((option, index) => (
//                 <ListItem key={option.id} alignItems="flex-start">
//                   <ListItemText primary={`${index + 1}. ${option.text}`} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         ))}
//         {questions.length > 0 && (
//           <form onSubmit={handleSubmitQuiz} className={classes.form}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit Quiz
//             </Button>
//           </form>
//         )}
//         <Dialog open={openDialog} onClose={handleDialogClose}>
//           <DialogTitle>Select Workshop</DialogTitle>
//           <DialogContent>
//             <FormControl fullWidth>
//               <Select value={selectedWorkshop} onChange={handleWorkshopChange}>
//                 <MenuItem value="">-- Please select --</MenuItem>
//                 <MenuItem value="workshop1">Workshop 1</MenuItem>
//                 <MenuItem value="workshop2">Workshop 2</MenuItem>
//                 <MenuItem value="workshop3">Workshop 3</MenuItem>
//               </Select>
//             </FormControl>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleDialogClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleConfirm} color="primary" disabled={!selectedWorkshop}>
//               Confirm
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </CardContent>
//     </Card>
//   );
// }

// export default Quiz;

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
  makeStyles,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@material-ui/icons/Delete";

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
