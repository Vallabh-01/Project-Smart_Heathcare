export default function DoctorHome() {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        <div style={cardStyle}>Today's Appointments: 8</div>
        <div style={cardStyle}>Patients: 20</div>
        <div style={cardStyle}>Notifications: 2</div>
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
