// import ShowInfoBtn from "../Common Components/ShowInfoBtn";

// const UserProfile = ({ userInfo }) => {
//   return (
//     <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
//         {/* Profile Card */}
//         <div className="bg-blue-200 rounded-lg p-6 text-center text-black shadow-lg py-12">
//           <div className=" flex justify-center ">
//             <img className="w-24" src="../profile.png" alt="" />
//           </div>
//           <h2 className="mt-4 text-lg font-bold">{userInfo.name}</h2>
//           <p className="text-sm text-gray-300">{userInfo.email}</p>
//           <button className="mt-4 bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-full font-semibold">
//             {userInfo.type}
//           </button>

//           <div className="mt-6 space-y-3">
//             <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
//               ❌ Report
//             </button>
//             <ShowInfoBtn userInfo={userInfo}></ShowInfoBtn>
//             <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
//               📞 Contacts
//             </button>
//           </div>
//         </div>

//         {/* Emergency Actions */}
//         <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-red-500">
//           <h2 className="text-lg font-bold text-red-500 mb-4">
//             Emergency Actions
//           </h2>
//           <button className="w-full flex items-center justify-center border border-red-500 text-red-500 rounded-lg py-2 hover:bg-red-50 mb-3">
//             ⚠ Send SOS
//           </button>
//           <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg py-2 hover:bg-blue-50">
//             📍 SOS Map
//           </button>
//         </div>

//         {/* Safety Tips */}
//         <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-purple-500">
//           <h2 className="text-lg font-bold text-purple-500 mb-4">
//             Safety Tips
//           </h2>
//           <ul className="space-y-3 text-sm">
//             <li>
//               ✅{" "}
//               <span className="text-red-500 font-semibold">
//                 Stay aware of your surroundings
//               </span>{" "}
//               at all times, especially in unfamiliar areas.
//             </li>
//             <li>
//               ✅{" "}
//               <span className="text-orange-500 font-semibold">
//                 Share your location with trusted contacts
//               </span>{" "}
//               when traveling or meeting someone new.
//             </li>
//             <li>
//               ✅{" "}
//               <span className="text-red-500 font-semibold">
//                 Stay aware of your surroundings
//               </span>{" "}
//               at all times, especially in unfamiliar areas.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



import { useEffect, useState } from "react";
import ShowInfoBtn from "../Common Components/ShowInfoBtn";

const UserProfile = ({ userInfo }) => {
  const [notifications, setNotifications] = useState([]);
  const [activeNotif, setActiveNotif] = useState(null); // currently selected notification

  useEffect(() => {
    fetch("/notifications.json")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error("Failed to load notifications:", err));
  }, []);

  const handleNotifClick = (notif) => {
    // mark the notification as opened
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === notif.id ? { ...n, opened: true } : n
      )
    );
    setActiveNotif(notif);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-start justify-center px-6 py-10">
      <div className="flex w-full max-w-6xl gap-6">

        {/* Left Column: User Profile */}
        <div className="w-1/3 bg-blue-200 rounded-lg p-6 text-center text-black shadow-lg py-12">
          <div className="flex justify-center">
            <img className="w-24" src="../profile.png" alt="" />
          </div>
          <h2 className="mt-4 text-lg font-bold">{userInfo?.name}</h2>
          <p className="text-sm text-gray-300">{userInfo?.email}</p>
          <button className="mt-4 bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-full font-semibold">
            {userInfo?.type}
          </button>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
              ❌ Report
            </button>
            <ShowInfoBtn userInfo={userInfo}></ShowInfoBtn>
            <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
              📞 Contacts
            </button>
          </div>
        </div>

        {/* Right Column: Emergency + Safety + Notifications */}
        <div className="w-2/3 flex flex-col gap-6">
          {/* Top Row: Emergency and Safety */}
          <div className="flex gap-6">
            {/* Emergency Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-rose-400 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-rose-500 mb-4">
                Emergency Actions
              </h2>
              <button className="w-full flex items-center justify-center border border-red-500 text-red-500 rounded-lg py-2 hover:bg-red-50 mb-3">
                ⚠ Send SOS
              </button>
              <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg py-2 hover:bg-blue-50">
                📍 SOS Map
              </button>
            </div>

            {/* Safety Tips */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-purple-500 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-purple-500 mb-4">
                Safety Tips
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  ✅{" "}
                  <span className="text-red-500 font-semibold">
                    Stay aware of your surroundings
                  </span>{" "}
                  at all times, especially in unfamiliar areas.
                </li>
                <li>
                  ✅{" "}
                  <span className="text-orange-500 font-semibold">
                    Share your location with trusted contacts
                  </span>{" "}
                  when traveling or meeting someone new.
                </li>
                <li>
                  ✅{" "}
                  <span className="text-green-500 font-semibold">
                    Keep emergency contacts on speed dial
                  </span>{" "}
                  for quick access during an incident.
                </li>
              </ul>
            </div>
          </div>

          {/* Notifications Table below */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-pink-400 flex-1">
            <h2 className="text-xl font-bold text-pink-500 mb-4 flex items-center gap-2">
              Notifications
              {notifications.filter(notif => !notif.opened).length > 0 && (
                <span className="bg-gray-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {notifications.filter(notif => !notif.opened).length}
                </span>
              )}
            </h2>
            <ul className="space-y-3">
              {notifications.length === 0 ? (
                <li className="text-gray-400">No notifications available.</li>
              ) : (
                notifications.map((notif) => (
                  <li key={notif.id}>
                    <button
                      className={`btn btn-sm btn-outline w-full text-left text-lg border-pink-400 ${
                        notif.opened ? "font-normal" : "font-bold"
                          } hover:bg-pink-100 hover:text-pink-600 transition-all duration-200`}
                          onClick={() => handleNotifClick(notif)}
>
                        {notif.title || "View Details"}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Notification */}
      {activeNotif && (
        <dialog
          open
          className="modal"
          onClose={() => setActiveNotif(null)}
        >
          <div className="modal-box">
            <h3 className="text-lg font-bold">{activeNotif.title || activeNotif.type}</h3>
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

export default UserProfile;
