import React from "react";
import { Container, Box } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import WorkshopList from "./WorkshopList";
import Notifications from "./Notifications";

const studentdashboard = () => (
  <DashboardLayout>
    <DashboardNavbar />
    <Container>
      <Box>
        <WorkshopList />
      </Box>
      <Box>
        <Notifications />
      </Box>
    </Container>
  </DashboardLayout>
);

export default studentdashboard;
