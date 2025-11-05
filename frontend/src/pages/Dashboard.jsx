import React from "react";
import bg from "../assets/restaurant-bg.jpg"; // Add your restaurant background image

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/60 backdrop-blur-md p-12 rounded-2xl text-center shadow-2xl">
        <h1 className="text-5xl font-serif mb-4">Welcome, {user?.name || "Guest"}!</h1>
        <p className="text-lg italic text-gray-200">
          “Your daily restaurant management dashboard at Soho Tavern Gateshead.”
        </p>
        <a
          href="/checklist"
          className="mt-6 inline-block bg-burgundy text-white px-6 py-3 rounded-lg text-lg hover:bg-burgundy/90 transition shadow-md"
        >
          Go to Checklist
        </a>
      </div>
    </div>
  );
}
