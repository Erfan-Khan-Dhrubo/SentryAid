import React, { useEffect, useState } from "react";
import UserAlertMsg from "../../Components/User/UserAlertMsg";
import axios from "axios";

const DemoAdminPage = () => {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/messages");
        setMsg(res.data);
      } catch (error) {
        console.log("error fetching notes");
      }
    };

    // Run immediately on mount
    fetchMsg();

    // Run every 10 seconds
    const interval = setInterval(fetchMsg, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="text-4xl font-semibold text-center p-8">
        Emergency Message
      </div>
      <div className="flex flex-col gap-4">
        {msg.map((msg, idx) => (
          <UserAlertMsg key={idx} message={msg}></UserAlertMsg>
        ))}
      </div>
    </div>
  );
};

export default DemoAdminPage;
