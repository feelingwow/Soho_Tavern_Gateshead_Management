import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  if (!user?.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role === "admin") {
    if (
      !(
        location.pathname.startsWith("/dashboard") ||
        location.pathname.startsWith("/users")
      )
    ) {
      return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
    }
  }

  if (user.role === "viewer") {
    if (
      !(
        location.pathname.startsWith("/dashboard") ||
        location.pathname.startsWith("/reports")
      )
    ) {
      return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
    }
  }

  if (user.role === "editor") {
    if (location.pathname.startsWith("/users")) {
      return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
    }
  }

  return children;
}
