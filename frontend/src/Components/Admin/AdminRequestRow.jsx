import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router";
import { sendMail } from "../../Utilities/SendMail";

const AdminRequestRow = ({ user, setUsers }) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  // console.log(user);
  const handleReject = async (e, id) => {
    //e.preventDefault();

    if (!window.confirm("Are you sure you want to reject this person?")) return;

    if (!msg.trim()) {
      alert("All fields are required");
      return;
    }

    try {
      if (user.type === "user") {
        const updateNote = { ...user, request: "rejected" };
        const res1 = await axios.put(
          `http://localhost:5001/api/users/${id}`,
          updateNote
        );
        sendMail(res1.data.email, msg, "Volunteers’ Requests Rejected");
        //  console.log(res1);
        const res = await axios.get("http://localhost:5001/api/users");
        setUsers(res.data);
      } else {
        const res = await axios.delete(
          `http://localhost:5001/api/volunteers/${id}`
        );
        sendMail(res.data.email, msg, "Volunteers’ Requests Rejected");
        setUsers((prev) => prev.filter((user) => user._id !== id));
        // This line removes the deleted note from the UI immediately, without needing to re-fetch all notes from the server.
        // console.log(res.data.email);
      }
    } catch (error) {
      console.log("error in handleDelete", error);
    }
  };

  const handleAccept = async (e, id) => {
    //navigate("/admin");
    e.preventDefault();

    if (!window.confirm("Are you sure you want to accept this person?")) return;

    try {
      const updateNote = { ...user, request: "accepted" };
      if (user.type === "user") {
        const res1 = await axios.put(
          `http://localhost:5001/api/users/${id}`,
          updateNote
        );
        sendMail(
          res1.data.email,
          "Your volunteers’ requests have been accepted",
          "Volunteers’ Requests Accepted"
        );
        //  console.log(res1);
        const res = await axios.get("http://localhost:5001/api/users");
        setUsers(res.data);
      } else {
        const res1 = await axios.put(
          `http://localhost:5001/api/volunteers/${id}`,
          updateNote
        );
        sendMail(
          res1.data.email,
          "Your volunteers’ requests have been accepted",
          "Volunteers’ Requests Accepted"
        );
        //console.log(res1);
        const res2 = await axios.get("http://localhost:5001/api/volunteers");
        setUsers(res2.data);
      }
    } catch (error) {
      console.log("Error saving the note:", error);
    }
  };

  return (
    <tr className="border-b text-center align-middle">
      <td className="py-4 px-4 text-sm text-gray-700">{user.name}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{user.email ?? "--"}</td>
      <td className="py-4 px-4 text-sm text-gray-700">
        {user.location ?? "--"}
      </td>
      <td className="py-4 px-4 text-sm flex justify-center gap-4">
        <button
          className="btn rounded-lg bg-green-400 text-white w-24"
          onClick={(e) => handleAccept(e, user._id)}
        >
          Approve
        </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div>
          <button
            className="btn rounded-lg bg-red-400 text-white w-24"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Reject
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <label className="block mb-1 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="Message"
                rows="4"
                placeholder="Write the reasons for the rejection."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full mb-6 px-3 py-2 border rounded-lg bg-pink-50 placeholder-pink-500 focus:outline-none"
              />
              <div className="flex items-center justify-between">
                <div>
                  <button
                    onClick={(e) => handleReject(e, user._id)}
                    className="btn bg-pink-400 text-white rounded-lg mt-4"
                  >
                    Submit
                  </button>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-pink-400 text-white rounded-lg">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default AdminRequestRow;
