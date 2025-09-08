import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const BulletinBoard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // for navigation

  // Fetch all bulletin messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/bulletinMsg");
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching bulletin messages", error);
        alert("Failed to fetch bulletin messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading messages...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bulletin Board</h2>
        <button
          onClick={() => navigate("/create-bulletin-msg")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Create Blogs
        </button>
      </div>

      {messages.length === 0 ? (
        <p className="text-center text-gray-600">
          No bulletin messages available.
        </p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="border rounded p-4 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{msg.title}</h3>
                <span className="text-sm text-gray-500">{msg.type}</span>
              </div>
              <p className="text-gray-700 mb-2">{msg.msg}</p>
              <p className="text-sm text-gray-500">
                Posted by {msg.name} on{" "}
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BulletinBoard;
