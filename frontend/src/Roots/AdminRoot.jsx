import React from "react";
import AdminNavbar from "./../Components/Navbar/AdminNavbar";
import { Outlet } from "react-router";

const AdminRoot = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminRoot;
