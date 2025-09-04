import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import UserRoot from "../Roots/UserRoot";
import AdminRoot from "../Roots/AdminRoot";
import Admin from "../Pages/Admin/Admin";
import AlertMessage from "./../Pages/Admin/AlertMessage";
import UserLogin from "./../Pages/Users/UserLogin";
import UserRegister from "./../Pages/Users/UserRegister";
import AdminLogin from "./../Pages/Admin/AdminLogin";
import MainRoot from "../Roots/MainRoot";
import EditProfile from "./../Pages/Users/EditProfile";
import VolunteerRoot from "../Roots/VolunteerRoot";
import HeatMap from "../Pages/HeatMap";
import UserProfile from "../Components/User/UserProfile";
import VolunteerRanking from "../Pages/volunteerRanking";
import VolunteerProfile from "../Components/Volunteer/VolunteerProfile";
import ReportVolunteer from "./../Pages/reportVolunteer";
import Volunteer from "./../Pages/Volunteer/Volunteer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // User Routes
      {
        path: "users/:id",
        element: <UserRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <UserProfile />,
          },
          {
            path: "volunteerRanking",
            element: <VolunteerRanking />,
          },
          {
            path: "editProfile",
            element: <EditProfile />,
          },
          {
            path: "heatMap",
            element: <HeatMap />,
          },
        ],
      },
      {
        path: "usersLogin",
        element: <UserLogin />,
      },
      {
        path: "usersRegister",
        element: <UserRegister />,
      },
      // Volunteer Routes
      {
        path: "volunteers/:id",
        element: <VolunteerRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <VolunteerProfile />,
          },
          {
            path: "volunteerRanking",
            element: <VolunteerRanking />,
          },
          {
            path: "editProfile",
            element: <EditProfile />,
          },
          {
            path: "heatMap",
            element: <HeatMap />,
          },
        ],
      },
      {
        path: "/volunteerLogin", // Add userId parameter
        element: <Volunteer />,
      },
      {
        path: "/reportVolunteer/:volunteerId", // Add userId parameter
        element: <ReportVolunteer />,
      },
      // Admin Routes
      {
        path: "adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "admin",
        element: <AdminRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Admin />,
          },
          {
            path: "alertMessage",
            element: <AlertMessage />,
          },
        ],
      },
    ],
  },
]);
