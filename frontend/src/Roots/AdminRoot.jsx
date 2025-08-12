import AdminNavbar from "./../Components/Navbar/AdminNavbar";
import { Outlet } from "react-router";
import AdminSidebar from "../Components/Common Components/AdminSidebar";

const AdminRoot = () => {
  const userInfo = {
    _id: "689b84bd4687e93c52ffaea2",
    name: "Erfan Khan",
    type: "Admin",
  };
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="flex">
        <AdminSidebar userInfo={userInfo}></AdminSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminRoot;
