import { useState } from "react";

const LoginPage = ({ onLogin }: { onLogin: (role: string) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    const endpoint =
      mode === "login"
        ? "http://localhost:8000/api/login"
        : "http://localhost:8000/api/register";
    const formBody = new URLSearchParams();
    formBody.append("username", username);
    formBody.append("password", password);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });
      const data = await res.json();
      if (res.ok) {
        if (mode === "login") {
          // No token in backend, but keeping for future JWT support
          onLogin(data.role);
        } else {
          setSuccess("Registration successful! You can now log in.");
          setMode("login");
        }
      } else {
        setError(data.detail || data.error || "Operation failed");
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
            <span className="text-gray-200 font-mono text-sm">
              {mode === "login" ? "login.tsx" : "register.tsx"}
            </span>
            <div className="ml-auto flex gap-2">
              <button
                className={`text-xs px-2 py-1 rounded font-mono ${
                  mode === "login"
                    ? "bg-blue-700 text-white"
                    : "bg-[#23272e] text-gray-400 hover:bg-[#333842]"
                }`}
                onClick={() => {
                  setMode("login");
                  setError("");
                  setSuccess("");
                }}
              >
                Login
              </button>
              <button
                className={`text-xs px-2 py-1 rounded font-mono ${
                  mode === "register"
                    ? "bg-blue-700 text-white"
                    : "bg-[#23272e] text-gray-400 hover:bg-[#333842]"
                }`}
                onClick={() => {
                  setMode("register");
                  setError("");
                  setSuccess("");
                }}
              >
                Register
              </button>
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center font-mono">
              {mode === "login" ? "Login" : "Register"}
            </h2>
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
            {success && <div className="text-green-500 mb-4 font-mono">{success}</div>}
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-mono transition"
              onClick={handleSubmit}
            >
              {mode === "login" ? "Login" : "Register"}
            </button>
          </div>
        </div>
        {/* VS Code Status Bar ... (same as before) */}
      </div>
    </div>
  );
};

export default LoginPage;