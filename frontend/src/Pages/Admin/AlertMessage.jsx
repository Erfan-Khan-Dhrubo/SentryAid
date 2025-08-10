import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AlertMessage = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSendBroadcast = () => {
  // Validation
  if (!title && !message) {
    toast.error("Please fill the Title and Message Section.");
    return;
  }
  if (!title) {
    toast.error("Please fill the Title Section.");
    return;
  }
  if (!message) {
    toast.error("Please fill the Message Section.");
    return;
  }

  // Success toast
  toast(
    <div className="space-y-1 text-black">
      <p className="font-bold text-lg">Broadcast Sent</p>
      <p>
        <span className="font-semibold">Title:</span> {title}
      </p>
      <p>
        <span className="font-semibold">Message:</span> {message}
      </p>
    </div>
  );

  // Reset fields after sending
  setTitle("");
  setMessage("");
};


  return (
    <div className="min-h-screen flex bg-pink-50">
      {/* tables */}
      <main className="flex-grow p-8 text-black">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-4">SentryAid</h1>
          <h2 className="text-3xl font-extrabold mb-1">Admin Panel</h2>
          <p className="text-gray-500">
            Manage users and send emergency broadcasts.
          </p>
        </header>

        <div className="flex flex-row gap-5">
          <div className=" w-1/2 mb-6 bg-gray-200 flex  rounded gap-2">
            <button className="flex-grow p-2 border-b-2 border-pink-300 text-center cursor-default">
              Volunteer Management
            </button>
          </div>
          <div className=" w-1/2 mb-6 bg-gray-200 flex rounded gap-2">
            <button className="flex-grow p-2 border-b-2 border-pink-300 text-center cursor-default">
              Emergency Broadcasts
            </button>
          </div>
        </div>
        <div className="flex gap-6"></div>
        <div className="flex gap-6">
          {/* Create Broadcast */}
          <section className="bg-white rounded-lg p-6 flex-1 shadow-md">
            <h3 className="text-2xl font-bold mb-2">Create Broadcast</h3>
            <p className="text-gray-500 mb-4">
              Send an emergency alert to all users.
            </p>

            <label className="block mb-1 font-semibold" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Write the title of the alert"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded-lg bg-pink-50 placeholder-pink-500 focus:outline-none"
            />
            <label className="block mb-1 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Describe the emergency and provide instructions."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mb-6 px-3 py-2 border rounded-lg bg-pink-50 placeholder-pink-500 focus:outline-none"
            />
            <button
              onClick={handleSendBroadcast}
              className="w-full bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 rounded"
            >
              Send Broadcast
            </button>
          </section>

          {/* Past Broadcasts */}
          <section className="bg-white rounded-lg p-6 flex-1 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Past Broadcasts</h3>
            <p className="text-gray-500 mb-5">A log of recent alerts.</p>
            <ul className="space-y-4 text-sm font-semibold">
              {[
                { title: "Thief Alert : Mohammodpur Area", time: "2 hours ago" },
                { title: "Severe Harassment Warning : Tejgaon Area", time: "4 hours ago" },
                { title: "Flood Warning : Basundhara Area", time: "11 hours ago" },
              ].map((broadcast, index) => (
                <li key={index} className="flex justify-between">
                <span>{broadcast.title}</span>
                 <span className="text-gray-400">{broadcast.time}</span>
                </li>
              ))}
            </ul>
         </section>

        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default AlertMessage;
