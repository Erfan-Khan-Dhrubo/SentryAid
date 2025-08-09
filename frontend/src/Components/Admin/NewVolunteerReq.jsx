import React from "react";
import AdminRequestRow from "./AdminRequestRow";

const NewVolunteerReq = ({ abc }) => {
  return (
    <div>
      {/* Table */}
      <div className="mt-6  shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white">
            <tr>
              <th className="py-4 px-4 text-sm font-semibold text-gray-600 text-center">
                Name
              </th>
              <th className="py-4 px-4 text-sm font-semibold text-gray-600 text-center">
                Email
              </th>
              <th className="py-4 px-4 text-sm font-semibold text-gray-600 text-center">
                Location
              </th>
              <th className="py-4 px-4 text-sm font-semibold text-gray-600 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {abc.map((volunteer, idx) => (
              <AdminRequestRow
                key={idx}
                volunteer={volunteer}
              ></AdminRequestRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewVolunteerReq;
