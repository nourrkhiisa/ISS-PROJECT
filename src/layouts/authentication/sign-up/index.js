// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import React, { useState ,useContext } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg2.jpg";
import { AuthContext } from "contexts/AuthContext";

const roleOptions = [
  { value: "administrator", label: "Admin" },
  { value: "coach", label: "Coach" },
  { value: "student", label: "Student" },
];

function Cover() {
  const [role, setRole] = useState("");

  const [error, setError] = useState(null);
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async ({ email, password, firstName, lastName, role }) => {
    try {
      console.log("Request body from frontend:", {
        email,
        password,
        firstName,
        lastName,
        role,
      }); // Add this line to log the request body

      await signUp(email, password, firstName, lastName, role);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox
            component="form"
            role="form"
            onSubmit={(event) => {
              event.preventDefault();
              handleSignUp({
                email: event.target.email.value,
                password: event.target.password.value,
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                role,
              });
            }}
          >
            <MDBox mb={2}>
              <MDInput type="text" name="firstName" label=" First Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text"  name="lastName" label="Last Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" name="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" name="password" label="Password" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={role}
                  label="Role"
                  onChange={handleRoleChange}
                  defaultValue=""
                  sx={{ minWidth: "160px" }}
                >
                  {roleOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="warning"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="dark" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="warning"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
