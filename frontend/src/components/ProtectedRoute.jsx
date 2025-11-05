import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
  })();

  if (!user?.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
