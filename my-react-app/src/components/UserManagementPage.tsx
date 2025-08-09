import React, { useState } from 'react';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', role: '' });

  const handleAddUser = () => {
    if (newUser.username && newUser.role) {
      setUsers([...users, { ...newUser }]);
      setNewUser({ username: '', role: '' });
    }
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  const handleEditUser = (username) => {
    const userToEdit = users.find(user => user.username === username);
    if (userToEdit) {
      setNewUser(userToEdit);
      handleDeleteUser(username);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.username}>
            {user.username} - {user.role}
            <button onClick={() => handleEditUser(user.username)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.username)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagementPage;