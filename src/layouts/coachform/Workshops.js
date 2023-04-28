// import React from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";

// function Workshops() {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Workshops</Typography>
//         <Typography variant="body2">Here is where the workshops will be displayed.</Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default Workshops;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  headerCell: {
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  completed: {
    color: "green",
  },
  notCompleted: {
    color: "red",
  },
}));

const workshops = [
  { id: 1, name: "Workshop 1", date: "2023-04-27", attendees: 50, completed: true },
  { id: 2, name: "Workshop 2", date: "2023-04-28", attendees: 30, completed: false },
  // more workshops...
];

function Workshops() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" className={classes.title}>
        Workshops
      </Typography>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell className={classes.headerCell}>Name</TableCell>
              <TableCell className={classes.headerCell}>Date</TableCell>
              <TableCell className={classes.headerCell}>Attendees</TableCell>
              <TableCell className={classes.headerCell}>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workshops.map((workshop) => (
              <TableRow key={workshop.id}>
                <TableCell>{workshop.name}</TableCell>
                <TableCell>{workshop.date}</TableCell>
                <TableCell>{workshop.attendees}</TableCell>
                <TableCell>
                  {workshop.completed ? (
                    <CheckCircleIcon className={classes.completed} />
                  ) : (
                    <CancelIcon className={classes.notCompleted} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Workshops;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Button,
// } from "@material-ui/core";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import CancelIcon from "@material-ui/icons/Cancel";

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 700,
//   },
//   header: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   headerCell: {
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   paper: {
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//     padding: theme.spacing(3),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   completed: {
//     color: "green",
//   },
//   notCompleted: {
//     color: "red",
//   },
//   button: {
//     marginTop: theme.spacing(1),
//   },
// }));

// const workshops = [
//   { id: 1, name: "Workshop 1", date: "2023-04-27", attendees: 50, completed: true },
//   { id: 2, name: "Workshop 2", date: "2023-04-28", attendees: 30, completed: false },
//   // more workshops...
// ];

// function Workshops() {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleCreateQuiz = (id) => {
//     // Navigate to the Quiz component, passing the workshop ID as a URL parameter
//     navigate(`/quiz/${id}`);
//   };

//   return (
//     <Paper className={classes.paper}>
//       <Typography variant="h4" className={classes.title}>
//         Workshops
//       </Typography>
//       <TableContainer>
//         <Table className={classes.table}>
//           <TableHead className={classes.header}>
//             <TableRow>
//               <TableCell className={classes.headerCell}>Name</TableCell>
//               <TableCell className={classes.headerCell}>Date</TableCell>
//               <TableCell className={classes.headerCell}>Attendees</TableCell>
//               <TableCell className={classes.headerCell}>Completed</TableCell>
//               <TableCell className={classes.headerCell}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {workshops.map((workshop) => (
//               <TableRow key={workshop.id}>
//                 <TableCell>{workshop.name}</TableCell>
//                 <TableCell>{workshop.date}</TableCell>
//                 <TableCell>{workshop.attendees}</TableCell>
//                 <TableCell>
//                   {workshop.completed ? (
//                     <CheckCircleIcon className={classes.completed} />
//                   ) : (
//                     <CancelIcon className={classes.notCompleted} />
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     className={classes.button}
//                     onClick={() => handleCreateQuiz(workshop.id)}
//                   >
//                     Create Quiz
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Paper>
//   );
// }

// export default Workshops;

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Button,
//   Modal,
//   TextField,
// } from "@material-ui/core";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import CancelIcon from "@material-ui/icons/Cancel";

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 700,
//   },
//   header: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   headerCell: {
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   paper: {
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//     padding: theme.spacing(3),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   completed: {
//     color: "green",
//   },
//   notCompleted: {
//     color: "red",
//   },
//   modal: {
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// const workshops = [
//   { id: 1, name: "Workshop 1", date: "2023-04-27", attendees: 50, completed: true },
//   { id: 2, name: "Workshop 2", date: "2023-04-28", attendees: 30, completed: false },
//   // more workshops...
// ];

// function Workshops() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   const [quiz, setQuiz] = useState("");

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleQuizChange = (event) => {
//     setQuiz(event.target.value);
//   };

//   const handleAddQuiz = () => {
//     console.log("Add Quiz: ", quiz);
//     // ...code to add quiz...
//     setQuiz("");
//     handleClose();
//   };

//   function Workshops() {
//     const classes = useStyles();.

//   return (
//     <Paper className={classes.paper}>
//       <Typography variant="h4" className={classes.title}>
//         Workshops
//       </Typography>
//       <TableContainer>
//         <Table className={classes.table}>
//           {/* ...existing TableHead and TableBody code... */}
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     className={classes.button}
//                     onClick={handleOpen}
//                   >
//                     Create Quiz
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Modal
//         open={open}
//         onClose={handleClose}
//       >
//         <div className={classes.modal}>
//           <h2>Create Quiz</h2>
//           <TextField
//             label="Quiz Name"
//             value={quiz}
//             onChange={handleQuizChange}
//             fullWidth
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             onClick={handleAddQuiz}
//           >
//             Add Quiz
//           </Button>
//         </div>
//       </Modal>
//     </Paper>
//   );
// }

// export default Workshops;

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Button,
//   Modal,
//   TextField,
// } from "@material-ui/core";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import CancelIcon from "@material-ui/icons/Cancel";
// import { v4 as uuidv4 } from "uuid";

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 700,
//   },
//   header: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   headerCell: {
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   paper: {
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//     padding: theme.spacing(3),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   completed: {
//     color: "green",
//   },
//   notCompleted: {
//     color: "red",
//   },
//   button: {
//     marginTop: theme.spacing(1),
//   },
//   modal: {
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// const workshops = [
//   { id: 1, name: "Workshop 1", date: "2023-04-27", attendees: 50, completed: true },
//   { id: 2, name: "Workshop 2", date: "2023-04-28", attendees: 30, completed: false },
//   // more workshops...
// ];

// function Workshops() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   const [quiz, setQuiz] = useState({
//     name: "",
//     questions: [
//       {
//         text: "",
//         options: ["", ""],
//         answer: "",
//       },
//     ],
//   });

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleQuizNameChange = (event) => {
//     setQuiz({ ...quiz, name: event.target.value });
//   };

//   const handleQuestionChange = (id, event) => {
//     const questionIndex = quiz.questions.findIndex((question) => question.id === id);
//     const newQuestions = [...quiz.questions];
//     newQuestions[questionIndex].text = event.target.value;
//     setQuiz({ ...quiz, questions: newQuestions });
//   };

//   const handleOptionChange = (qIndex, oIndex, event) => {
//     const newQuestions = [...quiz.questions];
//     if (newQuestions[qIndex] && newQuestions[qIndex].options[oIndex]) {
//       newQuestions[qIndex].options[oIndex].text = event.target.value;
//       setQuiz({ ...quiz, questions: newQuestions });
//     }
//   };

//   // const handleAnswerChange = (index, event) => {
//   //   const newQuestions = [...quiz.questions];
//   //   newQuestions[index].answer = event.target.value;
//   //   setQuiz({ ...quiz, questions: newQuestions });
//   // };
//   const handleAnswerChange = (id, event) => {
//     const questionIndex = quiz.questions.findIndex((question) => question.id === id);
//     const newQuestions = [...quiz.questions];
//     newQuestions[questionIndex].answer = event.target.value;
//     setQuiz({ ...quiz, questions: newQuestions });
//   };
//   const handleAddQuestion = () => {
//     setQuiz({
//       ...quiz,
//       questions: [
//         ...quiz.questions,
//         {
//           id: uuidv4(), // generate a unique id for the new question
//           text: "",
//           options: [
//             { id: uuidv4(), text: "" }, // generate a unique id for each option
//             { id: uuidv4(), text: "" },
//           ],
//           answer: "",
//         },
//       ],
//     });
//   };

//   const handleAddQuiz = () => {
//     console.log("Add Quiz: ", quiz);
//     // Code to add quiz goes here.
//     // For instance, you could call an API endpoint to create a new quiz with the quiz data.
//     setQuiz({ name: "", questions: [{ text: "", options: ["", ""], answer: "" }] });
//     handleClose();
//   };
//   return (
//     <Paper className={classes.paper}>
//       <Typography variant="h4" className={classes.title}>
//         Workshops
//       </Typography>
//       <TableContainer>
//         <Table className={classes.table}>
//           <TableHead className={classes.header}>
//             <TableRow>
//               <TableCell className={classes.headerCell}>Name</TableCell>
//               <TableCell className={classes.headerCell}>Date</TableCell>
//               <TableCell className={classes.headerCell}>Attendees</TableCell>
//               <TableCell className={classes.headerCell}>Completed</TableCell>
//               <TableCell className={classes.headerCell}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {workshops.map((workshop) => (
//               <TableRow key={workshop.id}>
//                 <TableCell>{workshop.name}</TableCell>
//                 <TableCell>{workshop.date}</TableCell>
//                 <TableCell>{workshop.attendees}</TableCell>
//                 <TableCell>
//                   {workshop.completed ? (
//                     <CheckCircleIcon className={classes.completed} />
//                   ) : (
//                     <CancelIcon className={classes.notCompleted} />
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     className={classes.button}
//                     onClick={handleOpen}
//                   >
//                     Create Quiz
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Modal open={open} onClose={handleClose}>
//         <div className={classes.modal}>
//           <h2>Create Quiz</h2>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="name"
//             label="Quiz Name"
//             name="name"
//             autoFocus
//             value={quiz.name}
//             onChange={handleQuizNameChange}
//           />
//           {quiz.questions.map((question) => (
//             <div key={question.id}>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id={`question-${question.id}`}
//                 label={`Question ${question.id}`}
//                 name={`question-${question.id}`}
//                 value={question.text}
//                 onChange={(event) => handleQuestionChange(question.id, event)}
//               />
//               {question.options.map((option) => (
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   id={`option-${question.id}-${option.id}`}
//                   label={`Option ${option.id + 1}`}
//                   name={`option-${question.id}-${option.id}`}
//                   value={option.text}
//                   key={`option-${question.id}-${option.id}`} // use a unique key here
//                   onChange={(event) => handleOptionChange(question.id, option.id, event)}
//                 />
//               ))}
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id={`answer-${question.id}`}
//                 label="Answer"
//                 name={`answer-${question.id}`}
//                 value={question.answer}
//                 onChange={(event) => handleAnswerChange(question.id, event)}
//               />
//             </div>
//           ))}
//           <Button variant="contained" color="secondary" onClick={handleAddQuestion}>
//             Add Question
//           </Button>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             onClick={handleAddQuiz}
//           >
//             Add Quiz
//           </Button>
//         </div>
//       </Modal>
//     </Paper>
//   );
// }

// export default Workshops;
