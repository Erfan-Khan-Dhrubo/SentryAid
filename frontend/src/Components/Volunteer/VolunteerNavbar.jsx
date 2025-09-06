import { useState } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { RiSkull2Fill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const VolunteerNavbar = ({ volunteerInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    {
      to: `/volunteers/${volunteerInfo._id}`,
      label: "Dashboard",
      icon: <FaTachometerAlt className="mr-3" />,
    },
    {
      to: `/volunteers/${volunteerInfo._id}/volunteerRanking`,
      label: "Ranking",
      icon: <FaRankingStar className="mr-3" />,
    },
    {
      to: `/volunteers/${volunteerInfo._id}/editProfile`,
      label: "Edit Profile",
      icon: <AiFillEdit className="mr-3" />,
    },
    {
      to: `/volunteers/${volunteerInfo._id}/heatMap`,
      label: "Risk Zones",
      icon: <RiSkull2Fill className="mr-3" />,
    },
    {
      to: `/volunteers/${volunteerInfo._id}/sosAlert`,
      label: "Get SOS Alert",
      icon: <FaHandsHelping className="mr-3" />,
    },
  ];

  return (
    <>
      {/* Hamburger for small/medium */}
      <div
        className={`
    lg:hidden 
    px-4 py-3 flex justify-between items-center border-gray-200
    ${isOpen ? "bg-white" : "bg-pink-50"}
  `}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="text-2xl text-gray-700" />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white space-y-2 px-4 py-3 border-b border-gray-200">
          {menuLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end
              className={({ isActive }) =>
                `flex items-center px-2 py-2 rounded-lg ${
                  isActive
                    ? "bg-pink-100 text-pink-600 font-semibold"
                    : "text-gray-600 hover:bg-pink-50"
                }`
              }
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:bg-white lg:shadow-lg lg:h-screen lg:fixed">
        <div className="mt-6 space-y-2">
          {menuLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2  ${
                  isActive
                    ? "bg-pink-100 text-pink-600 font-semibold" // active style
                    : "text-gray-600 hover:bg-pink-50"
                }`
              }
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
};

export default VolunteerNavbar;
