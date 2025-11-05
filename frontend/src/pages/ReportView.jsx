// frontend/src/pages/ReportView.jsx
import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useSearchParams, Link } from "react-router-dom";

export default function ReportView() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (date) {
      API.get(`/checklist/${date}`)
        .then((res) => setReport(res.data))
        .catch(() => setReport(null))
        .finally(() => setLoading(false));
    }
  }, [date]);

  if (loading) return <div className="p-10 text-center text-lg">Loading...</div>;
  if (!report)
    return (
      <div className="p-10 text-center">
        <p>No report found for date: {date}</p>
        <Link to="/reports" className="btn-outline-glow mt-4 inline-block">
          Go Back
        </Link>
      </div>
    );

  return (
    <div className="pt-20 px-6 bg-cream min-h-screen text-burgundy">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 print:hidden">
          <h1 className="text-2xl font-serif font-semibold">
            SOHO TAVERN GATESHEAD — DAILY REPORT
          </h1>
          <div className="space-x-3">
            <Link
              to={`/checklist?date=${report.date}`}
              className="btn-outline-glow"
            >
              Edit Report
            </Link>
            <button
              onClick={() => window.print()}
              className="btn-glow bg-burgundy text-cream"
            >
              Print / Save as PDF
            </button>
          </div>
        </div>

        <div className="border-t border-b py-4 mb-4">
          <p>
            <strong>Date:</strong> {report.date}{" "}
          </p>
          <p>
            <strong>Name:</strong> {report.name}
          </p>
        </div>

        {/* Opening Checks */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Opening Checks</h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Check</th>
                <th className="p-2 w-16">Yes/No</th>
              </tr>
            </thead>
            <tbody>
              {report.openingChecks.map((c, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{c.label}</td>
                  <td className="p-2 text-center">{c.yes ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Fridge Temps */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Fridge Temperatures</h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Time</th>
                {Array.from({ length: 8 }).map((_, i) => (
                  <th key={i} className="p-2">
                    #{i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {report.fridgeTemps.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{row.time}</td>
                  {row.readings.map((r, j) => (
                    <td key={j} className="p-2 text-center">
                      {r}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Delivery */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Delivery Detail</h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Supplier</th>
                <th className="p-2">Product</th>
                <th className="p-2">Time</th>
                <th className="p-2">Surf Temp</th>
                <th className="p-2">Rejected</th>
                <th className="p-2">Sign</th>
              </tr>
            </thead>
            <tbody>
              {report.deliveryDetails.map((d, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{d.supplier}</td>
                  <td className="p-2">{d.product}</td>
                  <td className="p-2">{d.time}</td>
                  <td className="p-2">{d.surfTemp}</td>
                  <td className="p-2">{d.rejectedIfAny}</td>
                  <td className="p-2">{d.sign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Cooking */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Cooking & Chilling Procedure</h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Item Cooked</th>
                <th className="p-2">End Temp</th>
                <th className="p-2">Time</th>
                <th className="p-2">Method</th>
                <th className="p-2">Duration</th>
                <th className="p-2">End Temp</th>
              </tr>
            </thead>
            <tbody>
              {report.cookingDetails.map((c, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{c.itemCooked}</td>
                  <td className="p-2">{c.endCookingTemperature}</td>
                  <td className="p-2">{c.time}</td>
                  <td className="p-2">{c.chillingMethod}</td>
                  <td className="p-2">{c.chillingDuration}</td>
                  <td className="p-2">{c.endTemperature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Closing Checks */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Closing Checks</h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Check</th>
                <th className="p-2 w-16">Yes/No</th>
              </tr>
            </thead>
            <tbody>
              {report.closingChecks.map((c, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{c.label}</td>
                  <td className="p-2 text-center">{c.yes ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <p className="text-right text-sm text-gray-600 italic">
          Report generated on {new Date(report.updatedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
