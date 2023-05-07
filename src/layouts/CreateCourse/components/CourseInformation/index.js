// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Course page components
import Course from "layouts/CreateCourse/components/Course";

function CourseInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Courses Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Course
            name="Introduction to Flutter"
            company="Oliver"
            email="oliver@vermeg.com"
            vat="FRB1235476"
          />
          <Course
            name="Introduction to React"
            company="Lucas"
            email="lucas@sofrecom.com"
            vat="FRB1235476"
          />
          <Course
            name="Introduction to Angular"
            company="Ethan"
            email="ethan@smu.com"
            vat="FRB1235476"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CourseInformation;
