// src/layout/DashboardLayout.jsx
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import "./DashboardLayout.css";

export default function DashboardLayout({ role }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // go back to Home page
  };

  // Sidebar links based on role
  const links = [
    { path: "", label: "Home" },
    { path: "appointments", label: "Appointments" },
    { path: "records", label: "Records" },
    { path: "profile", label: "Profile" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>{role === "patient" ? "Patient Panel" : "Doctor Panel"}</h2>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="dashboard-main">
        <div className="topbar">
          <h3>Welcome, {role === "patient" ? "Patient" : "Doctor"}</h3>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
