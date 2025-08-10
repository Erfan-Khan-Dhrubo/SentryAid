import React from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router";

const AdminRequestRow = ({ user, setUsers }) => {
  const navigate = useNavigate();

  // console.log(user);
  const handleReject = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to reject this person?")) return;

    try {
      if (user.type === "user") {
        await axios.delete(`http://localhost:5001/api/users/${id}`);
      } else {
        await axios.delete(`http://localhost:5001/api/volunteers/${id}`);
      }

      setUsers((prev) => prev.filter((user) => user._id !== id));
      // This line removes the deleted note from the UI immediately, without needing to re-fetch all notes from the server.
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
        await axios.put(`http://localhost:5001/api/users/${id}`, updateNote);
        const res = await axios.get("http://localhost:5001/api/users");
        setUsers(res.data);
      } else {
        await axios.put(
          `http://localhost:5001/api/volunteers/${id}`,
          updateNote
        );
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
      <td className="py-4 px-4 text-sm">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
          onClick={(e) => handleAccept(e, user._id)}
        >
          Approve
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          onClick={(e) => handleReject(e, user._id)}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default AdminRequestRow;
