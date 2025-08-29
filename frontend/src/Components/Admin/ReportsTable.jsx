import React, { useEffect, useState } from "react";
import axios from "axios";
import { TImeFormate } from "../../Utilities/timeFormater";

const ReportsTable = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readReports, setReadReports] = useState(new Set());

  const fetchReports = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/reports");
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleReportClick = (reportId) => {
    // Mark report as read locally
    setReadReports(prev => new Set(prev).add(reportId));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-6">User Reports</h2>
      
      {reports.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p>No reports found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">User</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Message</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => {
                const isRead = readReports.has(report._id);
                return (
                  <tr 
                    key={report._id} 
                    className={`border-b hover:bg-gray-50 cursor-pointer ${isRead ? '' : 'font-semibold'}`}
                    onClick={() => handleReportClick(report._id)}
                  >
                    <td className="py-3 px-4 text-sm text-gray-800">
                      <div>
                        <p className={isRead ? '' : 'font-semibold'}>{report.userName}</p>
                        <p className="text-gray-600 text-xs">{report.userEmail}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-800">
                      <span className={isRead ? '' : 'font-semibold'}>{report.title}</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-800 max-w-md">
                      <div className={`line-clamp-2 ${isRead ? '' : 'font-semibold'}`}>
                        {report.message}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <span className={isRead ? '' : 'font-semibold'}>
                        {TImeFormate(new Date(report.createdAt))}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportsTable;