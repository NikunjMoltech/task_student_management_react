import AboutUs from "./AboutUs";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Students from "./Students";

export const dynamicRoutes = [
  {
    path: "/",
    title: "Dashboard",
    component: Home,
  },
  {
    path: "/login",
    title: "login",
    component: Login,
  },
  {
    path: "/signup",
    title: "signup",
    component: Signup,
  },
  {
    path: "/students",
    title: "students",
    component: Students,
  },
  {
    path: "/aboutus",
    title: "aboutus",
    component: AboutUs,
  },
];
