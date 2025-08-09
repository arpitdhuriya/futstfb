import React from "react";

const users = [
  { id: 1, name: "Rahul Sharma", role: "User" },
  { id: 2, name: "Priya Patel", role: "User" },
  { id: 3, name: "Arjun Kumar", role: "User" },
];

const UserManagementPage = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">User Management</h2>
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td className="border px-4 py-2">{u.id}</td>
            <td className="border px-4 py-2">{u.name}</td>
            <td className="border px-4 py-2">{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserManagementPage;