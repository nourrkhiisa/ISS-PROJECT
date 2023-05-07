import React, { useEffect, useRef, useState } from "react";
// reactstrap components
import { Badge, Button, Card, CardBody, Container, Row, Col, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "assets/css/argon-design-system-react.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css.map";
import "assets/css/argon-design-system-react.min.css";
import "assets/theme";
import "assets/scss/argon-design-system-react.scss";
import PropTypes from "prop-types";
// core components
import DemoNavbar from "components/Navbars/DemoNarbar";
import CardsFooter from "components/Footers/CardsFooter";
import styled from "styled-components";
import styles from "./CategoryFilter.module.css";

import Fl from "../../assets/images/Fl.png";
import BD from "../../assets/images/BD.png";
import ML from "../../assets/images/ML.png";
import ReactImg from "../../assets/images/react.jpg";
import NodeImg from "../../assets/images/node.jpg";
import AngularImg from "../../assets/images/angular1.png";

const CardImageContainer = styled.div`
  height: 33.33%;
  width: 100%;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /*This will maintain the aspect ratio of the image */
`;
function CategoryFilter({ setSelectedCategory }) {
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <Label for="categorySelect" className={styles.labelText}>
        Category:
      </Label>
      <Input
        type="select"
        name="category"
        id="categorySelect"
        onChange={handleChange}
        className="form-control"
      >
        <option value="all">All</option>
        <option value="flutter">Flutter</option>
        <option value="big-data">Big Data</option>
        {/* Add more categories as options here */}
      </Input>
    </div>
  );
}
CategoryFilter.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
};

function Landing() {
  const mainRef = useRef();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleSignUp = () => {
    navigate("layouts/authentication/sign-up/index.js");
  };

  const handleLogin = () => {
    navigate("layouts/authentication/sign-in/index.js");
  };

  const filterCourses = () => {
    const courses = [
      {
        id: 1,
        title: "Introduction to Flutter",
        category: "flutter",
        image: Fl,
        description:
          "This is the description for Course 1.Lorem ipsum dolor sit amet. Quonatus omnis id esse repellendus est quia ipsa aut rerum sint. 33numquam iure vel fuga assumenda et dolorem temporibus et laborumgalisum sed odio nulla rem neque maxime.",
        tags: ["flutter", "mobile", "development"],
      },
      {
        id: 2,
        title: "Introduction to Big Data",
        category: "big-data",
        image: BD,
        description:
          " This is the description of course 2.Lorem ipsum dolor sit amet. Quonatus omnis id esse repellendus est quia ipsa aut rerum sint. 33 numquamiure vel fuga assumenda et dolorem temporibus et laborum galisum sedodio nulla rem neque maxime.",
        tags: ["big-data", "data-science", "python"],
      },
      {
        id: 3,
        title: "Machine Learning",
        category: "Machine Learning",
        image: ML,
        description:
          "This is the description for Course 3.Lorem ipsum dolor sit amet. Quonatus omnis id esse repellendus est quia ipsa aut rerum sint. 33numquam iure vel fuga assumenda et dolorem temporibus et laborumgalisum sed odio nulla rem neque maxime.",
        tags: ["AI", "Python", "Deep Learning"],
      },
      {
        id: 4,
        title: "Introduction to React",
        category: "react",
        image: ReactImg,
        description:
          "This is the description for Course 4.Lorem ipsum dolor sit amet. Quonatus omnis id esse repellendus est quia ipsa aut rerum sint. 33numquam iure vel fuga assumenda et dolorem temporibus et laborumgalisum sed odio nulla rem neque maxime.Lorem ipsum dolor sit amet.",
        tags: ["react", "javascript", "frontend"],
      },
      {
        id: 5,
        title: "Introduction to Node",
        category: "node",
        image: NodeImg,
        description:
          "This is the description for Course 5.Lorem ipsum dolor sit amet. Quonatus omnis id esse repellendus est quia ipsa aut rerum sint. 33numquam iure vel fuga assumenda et dolorem temporibus et laborumgalisum sed odio nulla rem neque maxime.",
        tags: ["backend", "web development", "javascript"],
      },
      {
        id: 6,
        title: "Introduction to Angular",
        category: "angular",
        image: AngularImg,
        description:
          "This is the description for Course 6.Lorem ipsum dolor sit amet. Quonatus omnis id esse repellendus est quia ipsa aut rerum sint. 33numquam iure vel fuga assumenda et dolorem temporibus et laborumgalisum sed odio nulla rem neque maxime.",
        tags: ["frontend", "javascript", "web development"],
      },
    ];

    const updatedFilteredCourses = courses.filter(
      (course) => selectedCategory === "all" || course.category === selectedCategory
    );

    setFilteredCourses(updatedFilteredCourses);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterCourses();
  };
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
    filterCourses();
  }, []);

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-dark shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">Welcome to the Learning Platform </h1>
                    <p className="lead text-white">
                      Our comprehensive web-based learning platform offers courses for students and
                      provides tools for coaches and administrators.
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="warning"
                        onClick={handleSignUp}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user-plus" />
                        </span>
                        <span className="btn-inner--text">Sign up</span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        onClick={handleLogin}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-sign-in" />
                        </span>
                        <span className="btn-inner--text">Login</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <CategoryFilter
                  setSelectedCategory={(category) => handleCategoryChange(category)}
                />
                <Row className="row-grid">
                  {filteredCourses.map((course) => (
                    <Col lg="4" key={course.id} {...course}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <CardImageContainer>
                            <CardImage alt="" src={course.image} />
                          </CardImageContainer>
                          <h6 className="text-primary text-uppercase">{course.title}</h6>
                          <p className="description mt-3">{course.description}</p>
                          <div>
                            {course.tags.map((tag) => (
                              <Badge color="primary" pill className="mr-1">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            className="mt-4"
                            color="dark"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
}

export default Landing;
