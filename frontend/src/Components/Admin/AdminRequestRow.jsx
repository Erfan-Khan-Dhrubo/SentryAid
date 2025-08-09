import React from "react";

{
  /* <tr key={idx} className="border-b">
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {volunteer.name}
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {volunteer.email}
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {volunteer.location}
                  </td>
                  <td className="py-2 px-4 text-sm">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2">
                      Approve
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Reject
                    </button>
                  </td>
                </tr> */
}

const AdminRequestRow = ({ volunteer }) => {
  return (
    <tr className="border-b text-center align-middle">
      <td className="py-4 px-4 text-sm text-gray-700">{volunteer.name}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{volunteer.email}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{volunteer.location}</td>
      <td className="py-4 px-4 text-sm">
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2">
          Approve
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default AdminRequestRow;
