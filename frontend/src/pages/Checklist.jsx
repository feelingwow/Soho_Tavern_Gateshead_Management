import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function Checklist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const res = await API.get("/checklist");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching checklist:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchChecklist();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-burgundy text-lg">
        Loading checklist...
      </div>
    );

  if (!items.length)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        No checklist items found.
      </div>
    );

  return (
    <div className="min-h-screen bg-cream px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-burgundy/10">
        <h2 className="text-3xl font-semibold text-burgundy mb-8 text-center">
          Daily Maintenance Checklist
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-burgundy text-cream">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Task</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={item._id || i}
                  className={`border-b hover:bg-cream-100 transition ${
                    item.completed ? "bg-green-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 font-medium">{i + 1}</td>
                  <td className="py-3 px-4">{item.task}</td>
                  <td className="py-3 px-4">
                    {item.completed ? (
                      <span className="text-green-600 font-medium flex items-center gap-1">
                        ✅ Completed
                      </span>
                    ) : (
                      <span className="text-orange-600 font-medium flex items-center gap-1">
                        ⏳ Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
