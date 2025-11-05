// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Checklist from "./pages/Checklist";
// // frontend/src/App.jsx (relevant parts)
// import DailyReportForm from "./pages/DailyReportForm";
// import DailyReportsList from "./pages/DailyReportsList";

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" replace />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
          
//           <Route
//             path="/dashboard"
//             element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
//           />
//           <Route
//             path="/checklist"
//             element={<ProtectedRoute><Checklist /></ProtectedRoute>}
//           />
//           // inside <Routes>:
//          <Route
//            path="/checklist" 
//            element={<ProtectedRoute><DailyReportForm/></ProtectedRoute>} />
//          <Route 
//            path="/reports"
//            element={<ProtectedRoute><DailyReportsList/></ProtectedRoute>} />
  
//         </Routes>
//       </div>
//     </div>
//   );
// }


// frontend/src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DailyReportForm from "./pages/DailyReportForm";
import DailyReportsList from "./pages/DailyReportsList";
import ReportView from "./pages/ReportView";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-burgundy">
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checklist"
          element={
            <ProtectedRoute>
              <DailyReportForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <DailyReportsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report-view"
          element={
            <ProtectedRoute>
              <ReportView />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="p-10 text-center">
              <h1 className="text-2xl font-bold">404 — Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

