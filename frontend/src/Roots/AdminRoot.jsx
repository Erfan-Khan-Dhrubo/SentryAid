import { Outlet } from "react-router";
import AdminSidebar from "../Components/Common Components/AdminSidebar";

const AdminRoot = () => {
  return (
    <div>
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
