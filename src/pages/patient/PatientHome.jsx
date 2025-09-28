// src/pages/patient/PatientHome.jsx
export default function PatientHome() {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        <div style={cardStyle}>Upcoming Appointments: 5</div>
        <div style={cardStyle}>Medical Records: 12</div>
        <div style={cardStyle}>Notifications: 3</div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  flex: "1 1 200px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};
