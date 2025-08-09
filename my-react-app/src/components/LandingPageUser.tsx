import React from 'react';

const LandingPageUser: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the User Dashboard</h1>
      <p className="text-lg text-gray-700 mb-8">
        Here you can manage your profile, view your activities, and access user-specific features.
      </p>
      <div className="flex flex-col space-y-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          View Profile
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
          My Activities
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default LandingPageUser;