import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <NavLink to={"/volunteerLogin"} className={"btn"}>
        volunteer
      </NavLink>
    </div>
  );
};

export default Home;
