import { useEffect, useState } from "react";
import { fetchSpecific } from "../Utilities/Helper";
import { Outlet, useParams } from "react-router";
import VolunteerNavbar from "../Components/Volunteer/VolunteerNavbar";
import VolunteerProfile from "../Components/Volunteer/VolunteerProfile";

const VolunteerRoot = () => {
  const [volunteerInfo, setVolunteerInfo] = useState([]);
  const [type, setType] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchSpecific(
        `http://localhost:5001/api/volunteers/${id}`
      );
      setVolunteerInfo(data);
    };

    getUser();
  }, []);
  return (
    <div>
      <div className="flex">
        <div>
          <VolunteerNavbar volunteerInfo={volunteerInfo}></VolunteerNavbar>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRoot;
