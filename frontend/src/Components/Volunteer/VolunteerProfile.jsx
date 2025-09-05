import ShowInfoBtn from "../Common Components/ShowInfoBtn";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const VolunteerProfile = () => {
  const [notifications, setNotifications] = useState([]);
  const [activeNotif, setActiveNotif] = useState(null);
  const [sta, setSta] = useState("");
  const [readMessages, setReadMessages] = useState(new Set());
  const [volunteerInfo, setVolunteerInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("volunteer"));
    setVolunteerInfo(user);
  }, []);

  useEffect(() => {
    if (volunteerInfo) {
      setSta(volunteerInfo.status);
    }
  }, [volunteerInfo]);

  // Fetch real alert messages from backend
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/messages");
        setNotifications(response.data);
      } catch (error) {
        console.error("Failed to load alerts:", error);
      }
    };

    fetchAlerts();
  }, []);

  const handleNotifClick = (notif) => {
    setReadMessages((prev) => new Set(prev).add(notif._id));
    setActiveNotif(notif);
  };

  const makeActiveInactive = async () => {
    const newStatus = sta === "active" ? "inactive" : "active";
    setSta(newStatus);

    const volunteerUpdate = { ...volunteerInfo, status: newStatus };

    localStorage.setItem("volunteer", JSON.stringify(volunteerUpdate));

    try {
      const res = await axios.put(
        `http://localhost:5001/api/volunteers/${volunteerInfo._id}`,
        volunteerUpdate
      );
      console.log("Updated Volunteer:", res.data);
    } catch (error) {
      console.log("Error updating volunteer", error);
    }
  };

  const unreadCount = notifications.filter(
    (notif) => !readMessages.has(notif._id)
  ).length;

  return (
    <div className="flex flex-col gap-12 bg-pink-50 min-h-screen px-16 py-20">
      <div className="bg-pink-50 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Profile Card - UNCHANGED */}
          <div className="bg-blue-200 rounded-lg p-6 text-center text-black shadow-lg py-12">
            <div className="flex justify-center">
              <img className="w-24" src="../profile.png" alt="" />
            </div>
            <h2 className="mt-4 text-lg font-bold">{volunteerInfo.name}</h2>
            <p className="text-sm text-black">{volunteerInfo.email}</p>
            <button className="mt-4 bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-full font-semibold">
              {volunteerInfo.type}
            </button>

            <div className="mt-6 space-y-3">
              <ShowInfoBtn userInfo={volunteerInfo}></ShowInfoBtn>
              <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
                📞 Contacts
              </button>
              {sta == "active" ? (
                <button
                  onClick={makeActiveInactive}
                  className="w-full flex items-center justify-center border border-gray-400 bg-green-200 text-gray-700 rounded-lg py-2 hover:bg-gray-100"
                >
                  📞 Active
                </button>
              ) : (
                <button
                  onClick={makeActiveInactive}
                  className="w-full flex items-center justify-center border border-gray-400 bg-red-200 text-gray-700 rounded-lg py-2 hover:bg-gray-100"
                >
                  📞 Inactive
                </button>
              )}
            </div>
          </div>

          {/* Alert Messages - UPDATED */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-pink-400">
            <h2 className="text-xl font-bold text-pink-500 mb-4 flex items-center gap-2">
              Alert Messages
              {unreadCount > 0 && (
                <span className="bg-gray-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </h2>
            <ul className="space-y-3">
              {notifications.length === 0 ? (
                <li className="text-gray-400">No notifications available.</li>
              ) : (
                notifications.map((notif) => {
                  const isRead = readMessages.has(notif._id);
                  return (
                    <li key={notif._id}>
                      <button
                        className={`border flex items-center px-4 w-full py-3 rounded-lg border-pink-400 ${
                          isRead ? "font-normal" : "font-bold"
                        } hover:bg-pink-100 hover:text-pink-600 transition-all duration-200`}
                        onClick={() => handleNotifClick(notif)}
                      >
                        <div className="text-left">
                          <span>Title: {notif.title}</span>
                        </div>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          {/* NEW SOS Alert Card - SIMPLIFIED */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-red-500">
            <h2 className="text-xl font-bold text-red-500 mb-4">SOS Alert</h2>
            <button
              onClick={() =>
                navigate(`/volunteers/${volunteerInfo._id}/sosAlert`)
              }
              className="w-full flex items-center justify-center border border-red-500 text-red-500 rounded-2xl py-2 hover:bg-red-50 mt-6"
            >
              ⚠ Get SOS Alert
            </button>
          </div>
        </div>
      </div>

      {/* Notification Message */}
      {activeNotif && (
        <dialog open className="modal" onClose={() => setActiveNotif(null)}>
          <div className="modal-box">
            <h3 className="text-lg font-bold">{activeNotif.title}</h3>
            <p className="py-4">{activeNotif.message}</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setActiveNotif(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default VolunteerProfile;
