import React, { useState } from "react";

const LoginPage = ({ onLogin }: { onLogin: (role: string) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        onLogin(data.role);
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1e1e1e]">
      {/* Sidebar ... (same as before) */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-[#23272e] border border-[#333842] rounded-lg shadow-2xl w-full max-w-md">
          <div className="flex items-center px-4 py-2 border-b border-[#333842] bg-[#23272e] rounded-t-lg">
            <span className="text-gray-400 mr-2 material-icons">lock</span>
            <span className="text-gray-200 font-mono text-sm">login.tsx</span>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center font-mono">Login</h2>
            <label className="block text-gray-400 mb-2 font-mono">Username</label>
            <input
              className="w-full mb-4 p-2 bg-[#1e1e1e] border border-[#333842] rounded text-gray-200 font-mono"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoFocus
            />
            <label className="block text-gray-400 mb-2 font-mono">Password</label>
            <input
              type="password"
              className="w-full mb-6 p-2 bg-[#1e1e1e] border border-[#333842] rounded text-gray-200 font-mono"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <div className="text-red-500 mb-4 font-mono">{error}</div>}
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-mono transition"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        {/* VS Code Status Bar ... (same as before) */}
      </div>
    </div>
  );
};

export default LoginPage;