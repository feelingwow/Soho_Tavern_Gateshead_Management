import React, { useState, useEffect } from "react";
import API from "../utils/api";

export default function Checklist() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await API.get("/checklist");
      setItems(data || []);
    } catch (e) {
      console.error(e);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    try {
      const { data } = await API.post("/checklist", { task });
      setItems((prev) => [data, ...prev]);
      setTask("");
    } catch {
      alert("Failed to add item");
    }
  };

  return (
    <div className="pt-20 px-4 bg-cream min-h-screen flex justify-center">
      <div className="w-full max-w-4xl card p-6">
        <h2 className="text-2xl font-serif text-burgundy mb-4">Daily Checklist</h2>

        <form onSubmit={addItem} className="flex gap-2 mb-6">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            className="flex-1 border rounded-md px-3 py-2"
          />
          <button className="btn-glow">Add</button>
        </form>

        {items.length === 0 ? (
          <p className="text-gray-500">No items yet.</p>
        ) : (
          <div className="space-y-3">
            {items.map((it, i) => (
              <div key={i} className="p-3 rounded-md bg-white flex justify-between items-center shadow-sm">
                <span>{it.task}</span>
                <span className="text-sm text-gray-500">
                  {new Date(it.createdAt || Date.now()).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
