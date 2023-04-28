import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 140,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
}));

const workshops = [
  {
    id: 1,
    title: "Introduction to Python",
    imageUrl: "https://example.com/python-workshop.jpg",
    description: "Learn the basics of Python programming in this introductory workshop.",
    date: "2023-05-05",
  },
  {
    id: 2,
    title: "Web Development with React",
    imageUrl: "https://example.com/react-workshop.jpg",
    description: "Get started with React and build your first web application.",
    date: "2023-05-10",
  },
  {
    id: 3,
    title: "Data Analysis with R",
    imageUrl: "https://example.com/r-workshop.jpg",
    description: "Explore the world of data analysis and visualization with R.",
    date: "2023-05-15",
  },
  {
    id: 4,
    title: "Data Analysis with R",
    imageUrl: "https://example.com/r-workshop.jpg",
    description: "Explore the world of data analysis and visualization with R.",
    date: "2023-05-15",
  },
  {
    id: 5,
    title: "Data Analysis with R",
    imageUrl: "https://example.com/r-workshop.jpg",
    description: "Explore the world of data analysis and visualization with R.",
    date: "2023-05-15",
  },
  {
    id: 6,
    title: "Data Analysis with R",
    imageUrl: "https://example.com/r-workshop.jpg",
    description: "Explore the world of data analysis and visualization with R.",
    date: "2023-05-15",
  },
];

const itemsPerPage = 5; // Change this value according to how many workshops you want to display per page

function WorkshopList() {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {workshops.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((workshop) => (
          <Grid item xs={12} sm={6} md={4} key={workshop.id}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                component="img"
                alt={workshop.title}
                image={workshop.imageUrl}
                title={workshop.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {workshop.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {workshop.description}
                </Typography>
                <Typography variant="body1" component="p">
                  {`Date: ${workshop.date}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Enroll
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={classes.pagination}>
        <Pagination
          count={Math.ceil(workshops.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </Container>
  );
}

export default WorkshopList;
