import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import User from "../Pages/User";
import ViewProfile from "../Pages/ViewProfile";
import EditProfile from "../Pages/EditProfile";
import UserRoot from "../Roots/UserRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: ErrorPage,
  },
  {
    path: "/users",
    Component: UserRoot,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        path: "/users",
        Component: User,
      },
      {
        path: "/users/viewProfile",
        Component: ViewProfile,
      },
      {
        path: "/users/editProfile",
        Component: EditProfile,
      },
    ],
  },
]);
