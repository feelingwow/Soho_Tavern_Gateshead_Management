import React, { useState } from "react";
import API from "../utils/api";

export default function Checklist() {
  const [selectedDate, setSelectedDate] = useState("");
  const [freezeRows, setFreezeRows] = useState([
    { description: "Check both freezers temperature (AM/PM)", am: "", pm: "" },
  ]);
  const [isExisting, setIsExisting] = useState(false);

  const addRow = () => {
    setFreezeRows([
      ...freezeRows,
      { description: "Check both freezers temperature (AM/PM)", am: "", pm: "" },
    ]);
  };

  const removeRow = (index) => {
    setFreezeRows(freezeRows.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...freezeRows];
    updated[index][field] = value;
    setFreezeRows(updated);
  };

  const fetchByDate = async () => {
    if (!selectedDate) return alert("Please select a date first!");
    try {
      const { data } = await API.get(`/checklist?date=${selectedDate}`);
      if (data && data.fields?.length) {
        setFreezeRows(data.fields);
        setIsExisting(true);
        alert("✅ Loaded existing report for this date.");
      } else {
        setFreezeRows([{ description: "Check both freezers temperature (AM/PM)", am: "", pm: "" }]);
        setIsExisting(false);
        alert("ℹ️ No report found for this date. You can create a new one.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error fetching report for selected date.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) return alert("Please select a date before saving.");

    const payload = {
      section: "Freeze Temperature",
      date: selectedDate,
      fields: freezeRows,
    };

    try {
      if (isExisting) {
        await API.put(`/checklist?date=${selectedDate}`, payload);
        alert("✅ Report updated successfully!");
      } else {
        await API.post("/checklist", payload);
        alert("✅ New report saved successfully!");
        setIsExisting(true);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error saving report.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] p-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-serif text-burgundy text-center mb-6">
          Freeze Temperature
        </h1>

        <p className="text-sm text-gray-600 text-center mb-8 italic">
          Please record AM and PM freezer temperatures daily. Maintain below -18°C.
        </p>

        {/* Date Selection */}
        <div className="flex justify-center gap-4 mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-burgundy outline-none"
          />
          <button
            type="button"
            onClick={fetchByDate}
            className="bg-burgundy text-white px-4 py-2 rounded-lg hover:bg-burgundy/90 shadow transition"
          >
            View/Edit
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {freezeRows.map((row, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 shadow-sm bg-[#fffdfc]"
            >
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-medium block mb-1">
                  {row.description}
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="AM °C"
                    value={row.am}
                    onChange={(e) => handleChange(index, "am", e.target.value)}
                    className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-burgundy outline-none"
                  />
                  <input
                    type="text"
                    placeholder="PM °C"
                    value={row.pm}
                    onChange={(e) => handleChange(index, "pm", e.target.value)}
                    className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-burgundy outline-none"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeRow(index)}
                className="text-red-500 hover:text-red-700 font-bold text-lg px-2"
              >
                ❌
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={addRow}
              className="bg-burgundy text-white px-4 py-2 rounded-lg hover:bg-burgundy/90 shadow-md transition"
            >
              + Add Row
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 shadow-md transition"
            >
              {isExisting ? "Update Report" : "Save Report"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
