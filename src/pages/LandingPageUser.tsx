import React from "react";

const LandingPageUser = ({ onLogout }: { onLogout: () => void }) => (
  <div>
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <span className="font-bold">User Dashboard</span>
      <button onClick={onLogout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
    </nav>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome, User!</h2>
      <p>This is your dashboard. Explore the features and start learning!</p>
    </div>
  </div>
);

export default LandingPageUser;