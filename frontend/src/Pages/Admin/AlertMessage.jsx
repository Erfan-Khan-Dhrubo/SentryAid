import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { TImeFormate } from "../../Utilities/timeFormater";

const AlertMessage = () => {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [allMsg, setAllMsg] = useState([]);

  // Fetch messages function (can be called anywhere)
  const fetchAllMsg = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/messages");
      setAllMsg(res.data);
    } catch (error) {
      console.log("error fetching messages", error);
    }
  };

  // Fetch messages once when component mounts
  useEffect(() => {
    fetchAllMsg();
  }, []);

  // Handle broadcast submit
  const handleSendBroadcast = async (e) => {
    e.preventDefault();

    if (!title.trim() || !msg.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const message = { title, message: msg };
      console.log(message);
      await axios.post("http://localhost:5001/api/messages", message);

      toast(
        <div className="space-y-1 text-black">
          <p className="font-bold text-lg">Broadcast Sent</p>
          <p>
            <span className="font-semibold">Title:</span> {title}
          </p>
        </div>
      );

      // Clear form fields after successful send
      setTitle("");
      setMsg("");

      // Re-fetch all messages to update UI
      await fetchAllMsg();
    } catch (error) {
      console.log("Error creating message", error);
    } finally {
      setLoading(false);
    }
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
          <div className="w-1/2 mb-6 bg-gray-200 flex rounded gap-2">
            <button className="flex-grow p-2 border-b-2 border-pink-300 text-center cursor-default">
              Volunteer Management
            </button>
          </div>
          <div className="w-1/2 mb-6 bg-gray-200 flex rounded gap-2">
            <button className="flex-grow p-2 border-b-2 border-pink-300 text-center cursor-default">
              Emergency Broadcasts
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Create Broadcast */}
          <form className="flex-1" onSubmit={handleSendBroadcast}>
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
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full mb-6 px-3 py-2 border rounded-lg bg-pink-50 placeholder-pink-500 focus:outline-none"
              />
              <button
                className="w-full bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 rounded"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Broadcast"}
              </button>
            </section>
          </form>

          {/* Past Broadcasts */}
          <section className="bg-white rounded-lg p-6 flex-1 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Past Broadcasts</h3>
            <p className="text-gray-500 mb-5">A log of recent alerts.</p>
            <ul className="space-y-4 text-sm font-semibold">
              {allMsg.map((broadcast, index) => (
                <li key={index} className="flex justify-between">
                  <span>{broadcast.title}</span>
                  <span className="text-gray-400">
                    {TImeFormate(new Date(broadcast.createdAt))}
                  </span>
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
