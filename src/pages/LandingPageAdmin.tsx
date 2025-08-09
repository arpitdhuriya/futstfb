import React from "react";
import UserManagementPage from "./UserManagementPage";

const LandingPageAdmin = ({ onLogout }: { onLogout: () => void }) => (
  <div>
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <span className="font-bold">Admin Dashboard</span>
      <button onClick={onLogout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
    </nav>
    <UserManagementPage />
  </div>
);

export default LandingPageAdmin;