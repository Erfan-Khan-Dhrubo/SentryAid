import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerRanking = () => {
  // State to hold the list of volunteers
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulated data fetch from an API
  useEffect(() => {
    const fetchRanking = () => {
      try {
        // SIMULATED DATA - Simple numeric IDs for volunteers
        const mockVolunteers = [
          { _id: '1', name: 'Alice Johnson', email: 'alice.j@example.com', sosResponded: 42 },
          { _id: '2', name: 'Bob Smith', email: 'bob.smith@example.com', sosResponded: 38 },
          { _id: '3', name: 'Charlie Brown', email: 'charlie.b@example.com', sosResponded: 25 },
          { _id: '4', name: 'Diana Prince', email: 'diana.prince@example.com', sosResponded: 19 },
          { _id: '5', name: 'Edward Davis', email: 'ed.davis@example.com', sosResponded: 15 },
          { _id: '6', name: 'Fiona Miller', email: 'fiona.m@example.com', sosResponded: 8 },
          { _id: '7', name: 'George Wilson', email: 'george.w@example.com', sosResponded: 3 },
        ];

        // Sort volunteers by sosResponded in descending order
        const sortedVolunteers = mockVolunteers.sort((a, b) => b.sosResponded - a.sosResponded);
        setVolunteers(sortedVolunteers);
      } catch (error) {
        console.error('Failed to load volunteer ranking:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Simulate a network delay
    const timer = setTimeout(fetchRanking, 800);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle reporting a volunteer
  const handleReport = (volunteerId, volunteerName) => {
    // Navigate to the report page with volunteer ID and placeholder for user ID
    // User will manually enter their MongoDB user ID in the URL
    navigate(`/report-volunteer/${volunteerId}/user_id`);
    
  };

  // Function to determine badge/medal based on rank
  const getRankBadge = (index) => {
    switch (index) {
      case 0:
        return '🥇'; // Gold medal
      case 1:
        return '🥈'; // Silver medal
      case 2:
        return '🥉'; // Bronze medal
      default:
        return `#${index + 1}`; // Number for other ranks
    }
  };

  // Function to generate formal avatar placeholder based on name
  const getAvatarPlaceholder = (name) => {
    // Get initials from name
    const initials = name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    
    return (
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
        {initials}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-700">Loading leaderboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Volunteer Leaderboard
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Recognizing our top volunteers based on SOS requests responded to.
          </p>
        </div>

        {/* Ranking Table */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-indigo-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Top Responders</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {volunteers.length > 0 ? (
              volunteers.map((volunteer, index) => (
                <li key={volunteer._id} className="p-6 hover:bg-gray-50 transition duration-150">
                  <div className="flex items-center justify-between">
                    {/* Left side: Rank, Avatar, Name, and Email */}
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      {/* Rank/Badge */}
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-800 font-bold text-lg">
                        {getRankBadge(index)}
                      </div>

                      {/* Formal Avatar Placeholder */}
                      {getAvatarPlaceholder(volunteer.name)}

                      {/* Volunteer Info */}
                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-medium text-gray-900 truncate">
                          {volunteer.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {volunteer.email}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Volunteer ID: {volunteer._id}
                        </p>
                      </div>
                    </div>

                    {/* Right side: SOS Badge and Report Button */}
                    <div className="flex items-center space-x-4">
                      {/* Green SOS Response Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                        SOS Responses: <span className="font-bold ml-1">{volunteer.sosResponded}</span>
                      </div>

                      {/* Report Button */}
                      <button
                        onClick={() => handleReport(volunteer._id, volunteer.name)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-6 text-center">
                <p className="text-gray-500">No volunteer data available.</p>
              </li>
            )}
          </ul>
        </div>

        {/* Info Note */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            <strong>Note:</strong> This leaderboard is currently showing simulated data.
            It will display real volunteer rankings once the SOS response feature is live.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRanking;