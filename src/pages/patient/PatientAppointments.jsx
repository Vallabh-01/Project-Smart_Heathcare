// src/pages/patient/PatientAppointments.jsx
export default function PatientAppointments() {
  // Placeholder data
  const appointments = [
    { id: 1, doctor: "Dr. Smith", date: "2025-10-01", time: "10:00 AM", status: "Confirmed" },
    { id: 2, doctor: "Dr. Jane", date: "2025-10-05", time: "2:00 PM", status: "Pending" },
  ];

  return (
    <div>
      <h2>Appointments</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.doctor}</td>
              <td>{app.date}</td>
              <td>{app.time}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

