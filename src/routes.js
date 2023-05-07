/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import CreateCourse from "layouts/CreateCourse";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Calendar from "layouts/calendar/Calendar";
import Coachform from "layouts/coachform/coachform";
import Landing from "examples/LandingPage/landing";
import Studentdashboard from "layouts/studentdashboard/studentdashboard";

// @mui icons
import Icon from "@mui/material/Icon";

const USER_NAMES = {
  ADMIN: "administrator",
  COACH: "coach",
  STUDENT: "student",
  SIGNED_OUT: "signed_out",
};

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "landing",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/landing",
    component: <Landing />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    allowedUsers: [USER_NAMES.ADMIN, USER_NAMES.COACH, USER_NAMES.STUDENT],
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    icon: <Icon fontSize="small">calendar_month</Icon>,
    route: "/calendar",
    component: <Calendar />,
    allowedUsers: [USER_NAMES.ADMIN],
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
    allowedUsers: [USER_NAMES.ADMIN],
  },
  {
    type: "collapse",
    name: "Create Course",
    key: "Create Course",
    icon: <Icon fontSize="small">create</Icon>,
    route: "/CreateCourse",
    component: <CreateCourse />,
    allowedUsers: [USER_NAMES.ADMIN, USER_NAMES.COACH],
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
    allowedUsers: [USER_NAMES.ADMIN, USER_NAMES.COACH, USER_NAMES.STUDENT],
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
    allowedUsers: [USER_NAMES.ADMIN],
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    allowedUsers: [USER_NAMES.SIGNED_OUT],
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    allowedUsers: [USER_NAMES.SIGNED_OUT],
  },
  {
    type: "collapse",
    name: "Coach Form",
    key: "Coach Form",
    icon: <Icon fontSize="small">supervised_user_circle_icon</Icon>,
    route: "/coachform",
    component: <Coachform />,
    allowedUsers: [USER_NAMES.COACH],
  },
  {
    type: "collapse",
    name: "Student Dashboard",
    key: "Student Dashboard",
    icon: <Icon fontSize="small">co_present</Icon>,
    route: "/studentdashboard/",
    component: <Studentdashboard />,
    allowedUsers: [USER_NAMES.STUDENT],
  },
];

export { routes, USER_NAMES };
