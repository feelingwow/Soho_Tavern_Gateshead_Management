// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.svg";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const user = (() => {
//     try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
//   })();

//   const logout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="fixed w-full top-0 left-0 bg-white/50 backdrop-blur-md shadow-sm z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Soho Tavern Logo" className="w-10 h-10 animate-float" />
//           <span className="text-lg font-serif font-semibold text-burgundy">Soho Tavern — Gateshead</span>
//         </div>

//         {/* Links */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             <>
//               <Link to="/dashboard" className="hover:text-burgundy transition">Dashboard</Link>
//               <Link to="/checklist" className="hover:text-burgundy transition">Checklist</Link>
//               <button onClick={logout} className="btn-outline-glow text-sm">Logout</button>

//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-burgundy transition">Login</Link>
//               <Link to="/register" className="hover:text-burgundy transition">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.svg";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const user = (() => {
//     try {
//       return JSON.parse(localStorage.getItem("user"));
//     } catch {
//       return null;
//     }
//   })();

//   const logout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="fixed w-full top-0 left-0 bg-white/50 backdrop-blur-md shadow-sm z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Soho Tavern Logo"
//             className="w-10 h-10 animate-float"
//           />
//           <span className="text-lg font-serif font-semibold text-burgundy">
//             Soho Tavern — Gateshead
//           </span>
//         </div>

//         {/* Links */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             <>
//               <Link to="/dashboard" className="hover:text-burgundy transition">
//                 Dashboard
//               </Link>
//               <Link to="/checklist" className="hover:text-burgundy transition">
//                 Checklist
//               </Link>
//               <Link to="/reports" className="hover:text-burgundy transition">
//                 Reports
//               </Link>
//               <button onClick={logout} className="btn-outline-glow text-sm">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-burgundy transition">
//                 Login
//               </Link>
//               <Link to="/register" className="hover:text-burgundy transition">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"; // put your custom Soho Tavern logo here

export default function Navbar() {
  const navigate = useNavigate();
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/70 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo with hover enlargement */}
        <div className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Soho Tavern Logo"
            className="w-10 h-10 group-hover:scale-125 transition-transform duration-300"
          />
          <span className="text-lg font-serif font-semibold text-burgundy">
            Soho Tavern — Gateshead
          </span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-burgundy transition">
                Dashboard
              </Link>
              <Link to="/checklist" className="hover:text-burgundy transition">
                Checklist
              </Link>
              <button
                onClick={logout}
                className="bg-burgundy text-white px-3 py-1 rounded-md hover:bg-burgundy/90 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-burgundy transition">
                Login
              </Link>
              <Link to="/register" className="hover:text-burgundy transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
