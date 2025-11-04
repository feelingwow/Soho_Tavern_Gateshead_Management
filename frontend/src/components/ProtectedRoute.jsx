import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Wrap protected pages with <ProtectedRoute>...</ProtectedRoute>
 * It checks localStorage `user` token presence.
 */
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  let isAuth = false;
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    isAuth = !!user?.token;
  } catch (e) {
    isAuth = false;
  }

  if (!isAuth) {
    // send to login; remember location so we can redirect after login if needed
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
