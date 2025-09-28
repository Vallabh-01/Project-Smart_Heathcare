import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <h2 className="logo">Smart Health</h2>
      <ul>
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/dashboard/appointments">📅 Appointments</Link></li>
        <li><Link to="/dashboard/records">📑 Records</Link></li>
        <li><Link to="/dashboard/profile">👤 Profile</Link></li>
        <li><Link to="/logout">🚪 Logout</Link></li>
      </ul>

      {/* Role-based links */}
      {role === "doctor" && (
        <ul className="doctor-links">
          <li><Link to="/dashboard/manage">🩺 Manage Patients</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
