import React from "react";
import UserNavbar from "../Components/Navbar/UserNavbar";
import { Outlet } from "react-router";

const UserRoot = () => {
  return (
    <div>
      <UserNavbar></UserNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default UserRoot;
