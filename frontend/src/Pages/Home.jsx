import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <NavLink to={"/volunteerLogin"} className={"btn"}>
        volunteer
      </NavLink>
      <NavLink to={"/usersLogin"} className={"btn"}>
        user
      </NavLink>
      <NavLink to={"/adminLogin"} className={"btn"}>
        admin
      </NavLink>
    </div>
  );
};

export default Home;
