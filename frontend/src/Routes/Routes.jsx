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
import Volunteer from "../Pages/Volunteer/Volunteer";
import VolunteerRanking from "../Pages/volunteerRanking";
import ReportVolunteer from "../Pages/reportVolunteer";
import UserProfile from "../Components/User/UserProfile";

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
      // {
      //   path: "editProfile/:id",
      //   element: <EditProfile />,
      // },
      // Volunteer Routes
      {
        path: "volunteerLogin",
        element: <Volunteer />,
      },

      {
        path: "volunteers/:id",
        element: <VolunteerRoot />,
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
