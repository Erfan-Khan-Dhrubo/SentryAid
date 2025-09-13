import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import UserNavbar from "../Components/User/UserNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import api from "../Utilities/axios";

const UserRoot = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      // const data = await fetchSpecific(`http://localhost:5001/api/users/${id}`);
      const data = await api.get(`/users/${id}`);
      setUserInfo(data);
    };

    getUser();
  }, [id]);

  return (
    <div className="flex flex-col h-screen">
      {/* Hamburger Navbar for small/medium screens */}
      <div
        className={`lg:hidden ${
          isOpen ? "bg-white" : "bg-pink-50"
        }  shadow px-4 py-3 flex items-center justify-between`}
      >
        <button className="p-2  rounded" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar menu dropdown for small/medium screens */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg w-full">
          <UserNavbar userInfo={userInfo} isHorizontal />
        </div>
      )}

      <div className="flex flex-1">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block">
          <UserNavbar userInfo={userInfo} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-pink-50 p-4 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserRoot;
