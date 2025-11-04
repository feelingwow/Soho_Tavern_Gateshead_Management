import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center border border-burgundy/10">
        <h1 className="text-4xl font-bold text-burgundy mb-4">
          Welcome, {user?.name || "Guest"} 👋
        </h1>
        <p className="text-gray-700 mb-10 text-lg">
          Manage your daily operations, track checklist items, and stay updated on the
          Soho Tavern’s asset maintenance — all in one place.
        </p>

        <div className="flex justify-center">
          <Link
            to="/checklist"
            className="bg-burgundy text-cream px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-[#6f2a32] transition-all font-semibold"
          >
            Go to Checklist
          </Link>
        </div>
      </div>
    </div>
  );
}

