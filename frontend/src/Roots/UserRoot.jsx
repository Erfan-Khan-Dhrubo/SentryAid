import Navbar from "../Components/Common Components/Navbar";

import AdminSidebar from "../Components/Common Components/AdminSidebar";
import User from "../Pages/Users/User";
import { useEffect, useState } from "react";
import { fetchSpecific } from "../Utilities/Helper";
import { useParams } from "react-router";
import UserProfile from "../Components/User/UserProfile";

const UserRoot = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchSpecific(`http://localhost:5001/api/users/${id}`);
      setUserInfo(data);
    };

    getUser();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div>
          <AdminSidebar userInfo={userInfo}></AdminSidebar>
        </div>
        <div>
          <UserProfile userInfo={userInfo}></UserProfile>
        </div>
      </div>
    </div>
  );
};

export default UserRoot;
