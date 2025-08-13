import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Common Components/Navbar";

const MainRoot = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoot;
