// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Courses page components
import CourseAdditional from "../CourseAdditional";

function Courses() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Courses
        </MDTypography>
        <MDButton variant="outlined" color="warning" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <CourseAdditional date="March, 01, 2020" id="Introduction to Flutter" />
          <CourseAdditional date="February, 10, 2021" id="Introduction to Big Data" />
          <CourseAdditional date="April, 05, 2020" id="Introduction to Angular" />
          <CourseAdditional date="June, 25, 2019" id="Introduction to Machine Learning" />
          <CourseAdditional
            date="March, 01, 2019"
            id="Introduction to Digital Marketing"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Courses;
