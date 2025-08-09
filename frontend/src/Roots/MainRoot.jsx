import React from "react";
import { Outlet } from "react-router";

const MainRoot = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoot;
