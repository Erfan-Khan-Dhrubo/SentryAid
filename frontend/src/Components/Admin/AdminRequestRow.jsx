import React from "react";
import axios from "axios";

const AdminRequestRow = ({ user, setUsers }) => {
  const handleReject = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to reject this person?")) return;

    try {
      await axios.delete(`http://localhost:5001/api/users/${id}`);

      setUsers((prev) => prev.filter((user) => user._id !== id));
      // This line removes the deleted note from the UI immediately, without needing to re-fetch all notes from the server.
    } catch (error) {
      console.log("error in handleDelete", error);
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
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2">
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
