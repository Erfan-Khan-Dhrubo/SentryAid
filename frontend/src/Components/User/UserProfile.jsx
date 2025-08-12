import ShowInfoBtn from "../Common Components/ShowInfoBtn";

const UserProfile = ({ userInfo }) => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Profile Card */}
        <div className="bg-blue-200 rounded-lg p-6 text-center text-black shadow-lg py-12">
          <div className=" flex justify-center ">
            <img className="w-24" src="../profile.png" alt="" />
          </div>
          <h2 className="mt-4 text-lg font-bold">{userInfo.name}</h2>
          <p className="text-sm text-gray-300">{userInfo.email}</p>
          <button className="mt-4 bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-full font-semibold">
            {userInfo.type}
          </button>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
              ❌ Report
            </button>
            <ShowInfoBtn userInfo={userInfo}></ShowInfoBtn>
            <button className="w-full flex items-center justify-center border border-gray-400 bg-white text-gray-700 rounded-lg py-2 hover:bg-gray-100">
              📞 Contacts
            </button>
          </div>
        </div>

        {/* Emergency Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-red-500">
          <h2 className="text-lg font-bold text-red-500 mb-4">
            Emergency Actions
          </h2>
          <button className="w-full flex items-center justify-center border border-red-500 text-red-500 rounded-lg py-2 hover:bg-red-50 mb-3">
            ⚠ Send SOS
          </button>
          <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg py-2 hover:bg-blue-50">
            📍 SOS Map
          </button>
        </div>

        {/* Safety Tips */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-t-8 border-purple-500">
          <h2 className="text-lg font-bold text-purple-500 mb-4">
            Safety Tips
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              ✅{" "}
              <span className="text-red-500 font-semibold">
                Stay aware of your surroundings
              </span>{" "}
              at all times, especially in unfamiliar areas.
            </li>
            <li>
              ✅{" "}
              <span className="text-orange-500 font-semibold">
                Share your location with trusted contacts
              </span>{" "}
              when traveling or meeting someone new.
            </li>
            <li>
              ✅{" "}
              <span className="text-red-500 font-semibold">
                Stay aware of your surroundings
              </span>{" "}
              at all times, especially in unfamiliar areas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
