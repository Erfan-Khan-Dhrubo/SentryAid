import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const AlertMessage = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSendBroadcast = () => {
  toast(
    <div className="space-y-1 text-black gap-2">
      <p className="font-bold text-lg">Broadcast Sent</p>
      <p><span className="font-semibold">Title:</span> {title}</p>
      <p><span className="font-semibold">Message:</span> {message}</p>
    </div>
    );
  };

  
  return (
    <div className="min-h-screen flex bg-red-50">
      {/* side */}
      <aside className="w-64 bg-red-50 flex flex-col p-6 space-y-8 shadow-md">
        <div className="flex flex-row gap-1 shadow-sm">
          <img
        src="https://i.ibb.co/JRPNt7zW/security.png"
        alt="Security Icon"
        className="w-10 h-9"
      />
        <h1 className="text-2xl font-bold mb-2">SentryAid</h1>
        </div>
        

        <nav className="flex flex-col space-y-4 text-black font-semibold text-lg">
          <a href="#dashboard" className="flex items-center gap-2 hover:text-pink-700 cursor-pointer font-bold">
            <span>📊</span> Dashboard
          </a>
          <a href="#profile" className="flex items-center gap-2 hover:text-pink-700 cursor-pointer font-bold">
            <span>👤</span> Profile
          </a>
          <a href="#admin" className="flex items-center gap-2 hover:text-pink-700 cursor-pointer font-bold">
            <span>🛡️</span> Admin Panel
          </a>
        </nav>

        <div className="mt-auto flex items-center gap-3 text-black font-semibold cursor-pointer">
          <div className="bg-red-600 rounded-full w-8 h-8 flex justify-center items-center text-white font-bold">
          </div>
          <div>
            <p>Admin</p>
            <p className="text-xs">admin@sentryaid.com</p>
          </div>
          <button className="ml-auto text-pink-700 font-bold text-xl">
            <img
            src="https://i.ibb.co.com/3y5KDsPf/turn-back.png"
            alt="Security Icon"
            className="w-7 h-7"
            />
          </button>
        </div>
      </aside>

      {/* tables */}
      <main className="flex-grow p-8 text-black">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-4">SentryAid</h1>
          <h2 className="text-3xl font-extrabold mb-1">Admin Panel</h2>
          <p className="text-gray-500">Manage users and send emergency broadcasts.</p>
        </header>


      <div className="flex flex-row gap-5">
         <div className=" w-1/2 mb-6 bg-gray-200 flex border border-pink-300 rounded gap-2">
          <button className="flex-grow p-2 border-b-2 border-pink-300 text-center cursor-default">
            Volunteer Management
          </button>
          </div>
           <div className=" w-1/2 mb-6 bg-gray-200 flex border border-pink-300 rounded gap-2">
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
            <p className="text-gray-500 mb-4">Send an emergency alert to all users.</p>

            <label className="block mb-1 font-semibold" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Write the title of the alert"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-4 px-3 py-2 border-2 border-red-400 rounded bg-pink-100 placeholder-pink-500 focus:outline-none"
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
              className="w-full mb-6 px-3 py-2 border border-red-400 rounded bg-pink-100 placeholder-pink-500 focus:outline-none"
            />
            <button
              onClick={handleSendBroadcast}
              className="w-full bg-red-500 hover:bg-red-800 text-white font-semibold py-2 rounded"
            >
              Send Broadcast
            </button>
          </section>

          {/* Past Broadcasts */}
          <section className="bg-white rounded-lg p-6 flex-1 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Past Broadcasts</h3>
            <p className="text-gray-500 mb-5">A log of recent alerts.</p>

            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Wildfire Alert: North Ridge Area</span>
                <span className="text-gray-400">2 hours ago</span>
              </li>
              <li className="flex justify-between">
                <span>Severe Weather Warning: High Winds</span>
                <span className="text-gray-400">4 hours ago</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default AlertMessage;
