// import ShowInfoBtn from "../Common Components/ShowInfoBtn";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { TImeFormate } from "./../../Utilities/timeFormater";

// const UserProfile = ({ userInfo }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [singleTitle, setSingleTitle] = useState("");
//   const [singleMsg, setSingleMsg] = useState("");

//   const fetchMsg = async () => {
//     try {
//       const res = await axios.get("http://localhost:5001/api/messages");
//       setNotifications(res.data);
//     } catch (error) {
//       console.log("error fetching notes");
//     }
//   };

//   useEffect(() => {
//     // Run immediately on mount
//     fetchMsg();

//     // Run every 10 seconds
//     const interval = setInterval(fetchMsg, 10000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   const handleNotificationClick = async (notificationObj, id) => {
//     document.getElementById("my_modal_2").showModal();
//     console.log(id);
//     setSingleMsg(notificationObj.message);
//     setSingleTitle(notificationObj.title);
//     const updatedNotification = {
//       ...notificationObj,
//       seen: [...notificationObj.seen, id], // push "123"
//     };

//     try {
//       const res = await axios.put(
//         `http://localhost:5001/api/messages/${notificationObj._id}`,
//         updatedNotification
//       );
//       console.log("Updated Volunteer:", res.data);
//     } catch (error) {
//       console.log("Error updating volunteer", error);
//     }

//     // If you have a state of notifications, update it here
//     setNotifications((prev) =>
//       prev.map((n) => (n._id === notificationObj._id ? updatedNotification : n))
//     );
//   };

//   return (
//     <div className="flex flex-col gap-12 bg-pink-50 min-h-screen px-16 py-20">
//       <div className="bg-pink-50 flex items-center justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//           {/* Profile Card */}
//           <div className="bg-blue-200 rounded-lg p-6 text-center text-black shadow-lg py-12">
//             <div className="flex justify-center">
//               <img className="w-24" src="../profile.png" alt="" />
//             </div>
//             <h2 className="mt-4 text-lg font-bold">{userInfo.name}</h2>
//             <p className="text-sm text-gray-300">{userInfo.email}</p>
//             <button className="mt-4 bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-full font-semibold">
//               {userInfo.type}
//             </button>

//             <div className="mt-6 space-y-3">
//               <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
//                 ❌ Report
//               </button>
//               <ShowInfoBtn userInfo={userInfo}></ShowInfoBtn>
//               <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
//                 📞 Contacts
//               </button>
//             </div>
//           </div>

//           {/* Emergency Actions */}
//           <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-red-500">
//             <h2 className="text-lg font-bold text-red-500 mb-4">
//               Emergency Actions
//             </h2>

//             <button className="w-full flex items-center justify-center border border-red-500 text-red-500 rounded-2xl py-2 hover:bg-red-50 mt-6">
//               ⚠ Send SOS
//             </button>
//           </div>

//           {/* Alert Messages */}
//           <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-pink-400">
//             <h2 className="text-xl font-bold text-pink-500 mb-4 flex items-center gap-2">
//               Alert Messages
//               {notifications.filter(
//                 (notification) => !notification.seen.includes(userInfo._id)
//               ).length > 0 && (
//                 <span className="bg-gray-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
//                   {
//                     notifications.filter(
//                       (notification) =>
//                         !notification.seen.includes(userInfo._id)
//                     ).length
//                   }
//                 </span>
//               )}
//             </h2>
//             <ul className="space-y-3">
//               {notifications.length === 0 ? (
//                 <li className="text-gray-400">No notifications available.</li>
//               ) : (
//                 notifications.map((notificationMsg, idx) => {
//                   const isSeen = notificationMsg.seen.includes(userInfo._id);
//                   return (
//                     <li key={idx}>
//                       <button
//                         className={`border flex items-center justify-between px-4 w-full py-3 rounded-lg border-pink-400 ${
//                           isSeen ? "font-normal" : "font-bold"
//                         } hover:bg-pink-100 hover:text-pink-600 transition-all duration-200`}
//                         onClick={() =>
//                           handleNotificationClick(notificationMsg, userInfo._id)
//                         }
//                       >
//                         <div className="flex gap-2">
//                           <span>Title:</span>
//                           <span>{notificationMsg.title}</span>
//                         </div>
//                         <div className="text-sm">
//                           {TImeFormate(new Date(notificationMsg.createdAt))}
//                         </div>
//                       </button>
//                     </li>
//                   );
//                 })
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Notification Message */}
//       <dialog id="my_modal_2" className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">{singleTitle}</h3>
//           <p className="py-4">{singleMsg}</p>
//           <div className="modal-action">
//             <form method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <button className="btn">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default UserProfile;



import ShowInfoBtn from "../Common Components/ShowInfoBtn";
import { useEffect, useState } from "react";
import axios from "axios";
import { TImeFormate } from "./../../Utilities/timeFormater";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = ({ userInfo }) => {
  const [notifications, setNotifications] = useState([]);
  const [singleTitle, setSingleTitle] = useState("");
  const [singleMsg, setSingleMsg] = useState("");
  const [reportTitle, setReportTitle] = useState("");
  const [reportMessage, setReportMessage] = useState("");
  const [isSendingReport, setIsSendingReport] = useState(false);

  const fetchMsg = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/messages");
      setNotifications(res.data);
    } catch (error) {
      console.log("error fetching notes");
    }
  };

  useEffect(() => {
    // Run immediately on mount
    fetchMsg();

    // Run every 10 seconds
    const interval = setInterval(fetchMsg, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleNotificationClick = async (notificationObj, id) => {
    document.getElementById("my_modal_2").showModal();
    console.log(id);
    setSingleMsg(notificationObj.message);
    setSingleTitle(notificationObj.title);
    const updatedNotification = {
      ...notificationObj,
      seen: [...notificationObj.seen, id], // push "123"
    };

    try {
      const res = await axios.put(
        `http://localhost:5001/api/messages/${notificationObj._id}`,
        updatedNotification
      );
      console.log("Updated Volunteer:", res.data);
    } catch (error) {
      console.log("Error updating volunteer", error);
    }

    // If you have a state of notifications, update it here
    setNotifications((prev) =>
      prev.map((n) => (n._id === notificationObj._id ? updatedNotification : n))
    );
  };

 const handleSendReport = async () => {
  // Validate fields
  if (!reportTitle.trim() || !reportMessage.trim()) {
    toast.error("All fields should be filled", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  setIsSendingReport(true);
  
  try {
    // Send report to backend
    const response = await axios.post("http://localhost:5001/api/reports", {
      title: reportTitle,
      message: reportMessage,
      userId: userInfo._id
    });
    
    toast.success("Report is sent successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    // Clear form fields
    setReportTitle("");
    setReportMessage("");
    
    console.log("Report saved:", response.data);
    
  } catch (error) {
    console.error("Error sending report:", error);
    toast.error("Failed to send report", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } finally {
    setIsSendingReport(false);
  }
};

  return (
    <div className="flex flex-col gap-12 bg-pink-50 min-h-screen px-16 py-20">
      <div className="bg-pink-50 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Profile Card */}
          <div className="bg-blue-200 rounded-lg p-6 text-center text-black shadow-lg py-12">
            <div className="flex justify-center">
              <img className="w-24" src="../profile.png" alt="" />
            </div>
            <h2 className="mt-4 text-lg font-bold">{userInfo.name}</h2>
            <p className="text-sm text-gray-300">{userInfo.email}</p>
            <button className="mt-4 bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-full font-semibold">
              {userInfo.type}
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

          {/* Emergency Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-red-500">
            <h2 className="text-lg font-bold text-red-500 mb-4">
              Emergency Actions
            </h2>

            <button className="w-full flex items-center justify-center border border-red-500 text-red-500 rounded-2xl py-2 hover:bg-red-50 mt-6">
              ⚠ Send SOS
            </button>
          </div>

          {/* Alert Messages */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-pink-400">
            <h2 className="text-xl font-bold text-pink-500 mb-4 flex items-center gap-2">
              Alert Messages
              {notifications.filter(
                (notification) => !notification.seen.includes(userInfo._id)
              ).length > 0 && (
                <span className="bg-gray-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {
                    notifications.filter(
                      (notification) =>
                        !notification.seen.includes(userInfo._id)
                    ).length
                  }
                </span>
              )}
            </h2>
            <ul className="space-y-3">
              {notifications.length === 0 ? (
                <li className="text-gray-400">No notifications available.</li>
              ) : (
                notifications.map((notificationMsg, idx) => {
                  const isSeen = notificationMsg.seen.includes(userInfo._id);
                  return (
                    <li key={idx}>
                      <button
                        className={`border flex items-center justify-between px-4 w-full py-3 rounded-lg border-pink-400 ${
                          isSeen ? "font-normal" : "font-bold"
                        } hover:bg-pink-100 hover:text-pink-600 transition-all duration-200`}
                        onClick={() =>
                          handleNotificationClick(notificationMsg, userInfo._id)
                        }
                      >
                        <div className="flex gap-2">
                          <span>Title:</span>
                          <span>{notificationMsg.title}</span>
                        </div>
                        <div className="text-sm">
                          {TImeFormate(new Date(notificationMsg.createdAt))}
                        </div>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* NEW REPORT CARD - Added below the existing 3 cards */}
      <div className="bg-pink-50 flex items-center w-full">
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-blue-500">
            <h2 className="text-xl font-bold text-blue-500 mb-4">
              Report
            </h2>
            <div className="space-y-4">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter report title"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Describe your report in detail"
                  value={reportMessage}
                  onChange={(e) => setReportMessage(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendReport}
                disabled={isSendingReport}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSendingReport ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                  Send Report
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Message Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{singleTitle}</h3>
          <p className="py-4">{singleMsg}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
