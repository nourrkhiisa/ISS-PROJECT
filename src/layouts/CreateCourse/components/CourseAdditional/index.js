// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function CourseAdditional({ date, id, noGutter }) {
  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <MDBox lineHeight={1.125}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {id}
        </MDTypography>
        <MDTypography variant="caption" fontWeight="regular" color="text">
          {date}
        </MDTypography>
      </MDBox>
      <MDBox display="flex" alignItems="center">
        <MDBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small" color="error">
            add_circle_outline
          </Icon>
          <MDTypography variant="button" fontWeight="bold">
            &nbsp;Brochure
          </MDTypography>
        </MDBox>
        <MDBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small">add_circle</Icon>
          <MDTypography variant="button" fontWeight="bold">
            &nbsp;Video
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Invoice
CourseAdditional.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
CourseAdditional.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default CourseAdditional;
