import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="pt-20 px-4 flex justify-center bg-cream min-h-screen">
      <div className="max-w-4xl w-full card p-8">
        <h1 className="text-3xl font-serif text-burgundy mb-4">Welcome, {user.name || "Guest"} 👋</h1>
        <p className="text-gray-600 mb-6">Manage daily restaurant operations and track checklists efficiently.</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6 text-center">
            <h3 className="font-semibold text-burgundy">Today's Checklists</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-semibold text-burgundy">Pending Issues</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-semibold text-burgundy">Inventory Alerts</h3>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/checklist" className="btn-outline">View Daily Checklist</Link>
        </div>
      </div>
    </div>
  );
}
