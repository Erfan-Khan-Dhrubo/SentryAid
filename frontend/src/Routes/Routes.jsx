import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
// import User from "../Pages/Users/User";
// import ViewProfile from "../Pages/Users/ViewProfile";
// import EditProfile from "../Pages/Users/EditProfile";
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
      {
        path: "usersLogin",
        element: <UserLogin />,
      },
      {
        path: "usersRegister",
        element: <UserRegister />,
      },
      {
        path: "adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "heatMap",
        element: <HeatMap />,
      },
      {
        path: "editProfile/:id",
        element: <EditProfile />,
      },
      {
        path: "users/:id",
        element: <UserRoot />,
      },
      {
        path: "volunteers/:id",
        element: <VolunteerRoot />,
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
