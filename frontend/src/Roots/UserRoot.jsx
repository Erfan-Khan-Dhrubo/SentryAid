import { useEffect, useState } from "react";
import { fetchSpecific } from "../Utilities/Helper";
import { useParams } from "react-router";
import UserProfile from "../Components/User/UserProfile";
import UserNavbar from "../Components/User/UserNavbar";

const UserRoot = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [type, setType] = useState("");
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
      <div className="flex">
        <div>
          <UserNavbar userInfo={userInfo}></UserNavbar>
        </div>
        <div className="flex-1">
          <UserProfile userInfo={userInfo}></UserProfile>
        </div>
      </div>
    </div>
  );
};

export default UserRoot;
