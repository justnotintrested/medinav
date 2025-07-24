import React from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      {/* Header */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 relative">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-700">MediNav <span className="text-sm text-green-600 ml-1">• Live</span></h1>
          <button className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">Emergency</button>
        </div>

        {/* Welcome Message */}
        <div className="text-center mt-8">
          <h2 className="text-lg font-semibold text-gray-800">Welcome to City General Hospital</h2>
          <p className="text-sm text-gray-600 mt-2">
            Choose from the options below to navigate the hospital with real-time directions and department information.
          </p>
          <p className="text-green-600 text-sm mt-2">• Navigation Ready</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={() => navigate("/find-department")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow"
          >
            📍 Find Department
          </button>

          <button
            onClick={() => navigate("/map")}
            className="bg-white hover:bg-gray-200 border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow"
          >
            🗺 View Hospital Map
          </button>

          <button
            onClick={() => navigate("/emergency")}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow"
          >
            ⚠ Emergency Exit
          </button>
        </div>

        {/* Hospital Info */}
        <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Hospital Information</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              🚑 <strong>Emergency Services:</strong> Available 24/7
            </li>
            <li>
              ☎ <strong>Emergency Contact:</strong> Call 911
            </li>
            <li>
              📍 <strong>Information Desk:</strong> Ground Floor - Reception
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;