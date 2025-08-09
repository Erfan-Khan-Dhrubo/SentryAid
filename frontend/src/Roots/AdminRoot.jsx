import React from "react";
import AdminNavbar from "./../Components/Navbar/AdminNavbar";
import { Outlet } from "react-router";
import AdminSidebar from "../Components/Sidebar/AdminSidebar";

const AdminRoot = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="flex">
        <AdminSidebar></AdminSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminRoot;
