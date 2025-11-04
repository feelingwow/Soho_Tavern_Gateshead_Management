import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-burgundy text-cream px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-burgundy font-bold">
          ST
        </div>
        <Link to="/dashboard" className="text-lg font-semibold">
          Soho Tavern — Gateshead
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="/checklist" className="text-sm hover:underline">
              My Checklist
            </Link>
            <span className="text-sm opacity-90">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-cream text-burgundy px-3 py-1 rounded-md text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm hover:underline">
              Login
            </Link>
            <Link to="/register" className="text-sm hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
