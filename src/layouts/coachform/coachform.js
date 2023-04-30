import React from "react";
import { Container } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Calendar from "./Calendar";
import Quiz from "./Quiz";
import Workshops from "./Workshops";

function coachform() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container>
        <Calendar />

        <Quiz />

        <Workshops />
      </Container>
    </DashboardLayout>
  );
}

export default coachform;
