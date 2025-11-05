// frontend/src/pages/DailyReportsList.jsx
import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link } from "react-router-dom";

export default function DailyReportsList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    API.get("/checklist")
      .then(res => setReports(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pt-20 p-6 bg-cream min-h-screen text-burgundy">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-serif">Saved Daily Reports</h1>
          <Link to="/checklist" className="btn-outline-glow">Fill New</Link>
        </div>

        {reports.length === 0 ? (
          <p>No saved reports found.</p>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Date</th>
                <th className="p-2">Name</th>
                <th className="p-2">Created</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r._id} className="border-b hover:bg-cream">
                  <td className="p-2">
                    <Link to={`/checklist?date=${r.date}`} className="text-burgundy font-medium">{r.date}</Link>
                  </td>
                  <td className="p-2">{r.name}</td>
                  <td className="p-2">{new Date(r.createdAt).toLocaleString()}</td>
                  <td className="p-2">
                    <Link to={`/checklist?date=${r.date}`} className="text-sm btn-outline-glow">View / Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
