import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="pt-20 px-4 flex justify-center bg-cream min-h-screen">
      <div className="max-w-4xl w-full p-8">
        <div className="card-glow p-8">
          <h1 className="text-3xl font-serif text-burgundy mb-2">Welcome, {user.name || "Guest"} 👋</h1>
          <p className="text-gray-600 mb-6">Manage daily restaurant operations and track checklists efficiently.</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card-glow p-6 text-center">
              <span className="card-accent">Today's Checklists</span>
              <p className="text-3xl font-bold mt-2">12</p>
              <div className="mt-3">
                <button className="btn-outline-glow">View</button>
              </div>
            </div>

            <div className="card-glow p-6 text-center">
              <span className="card-accent">Pending Issues</span>
              <p className="text-3xl font-bold mt-2">3</p>
              <div className="mt-3">
                <button className="btn-outline-glow">Resolve</button>
              </div>
            </div>

            <div className="card-glow p-6 text-center">
              <span className="card-accent">Inventory Alerts</span>
              <p className="text-3xl font-bold mt-2">2</p>
              <div className="mt-3">
                <button className="btn-outline-glow">Check</button>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link to="/checklist" className="hero-btn smooth-color">Open Daily Checklist</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
