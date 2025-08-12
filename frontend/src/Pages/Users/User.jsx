import React from "react";
import UserProfile from "../../Components/User/UserProfile";
import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { fetchSpecific } from "../../Utilities/Helper";

const User = () => {
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
      <UserProfile userInfo={userInfo}></UserProfile>
    </div>
  );
};

export default User;
