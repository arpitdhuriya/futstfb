import React from 'react';

const LandingPageAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Admin Dashboard</h1>
      </header>
      <main className="p-4">
        <h2 className="text-xl font-semibold">Welcome, Admin!</h2>
        <p className="mt-2">Here you can manage users, view reports, and configure settings.</p>
        <nav className="mt-4">
          <ul>
            <li>
              <a href="/user-management" className="text-blue-500 hover:underline">User Management</a>
            </li>
            <li>
              <a href="/reports" className="text-blue-500 hover:underline">View Reports</a>
            </li>
            <li>
              <a href="/settings" className="text-blue-500 hover:underline">Settings</a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default LandingPageAdmin;