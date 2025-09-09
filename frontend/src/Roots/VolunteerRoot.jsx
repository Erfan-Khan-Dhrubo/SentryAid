import { useEffect, useState } from "react";
import { fetchSpecific } from "../Utilities/Helper";
import { Outlet, useParams } from "react-router";
import VolunteerNavbar from "../Components/Volunteer/VolunteerNavbar";

const VolunteerRoot = () => {
  const [volunteerInfo, setVolunteerInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchSpecific(
        `http://localhost:5001/api/volunteers/${id}`
      );
      setVolunteerInfo(data);
    };
    getUser();
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col sm:flex-row">
      {/* Navbar / Sidebar */}
      <VolunteerNavbar volunteerInfo={volunteerInfo} />

      {/* Main content */}
      <div className="flex-1">
        {/* lg:ml-64 adds left margin on large screens to prevent overlap */}
        <Outlet />
      </div>
    </div>
  );
};

export default VolunteerRoot;
