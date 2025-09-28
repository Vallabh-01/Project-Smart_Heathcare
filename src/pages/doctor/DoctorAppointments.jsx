export default function DoctorAppointments() {
  const appointments = [
    { id: 1, patient: "John Doe", date: "2025-10-01", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", date: "2025-10-05", time: "2:00 PM", status: "Pending" },
  ];

  return (
    <div>
      <h2>Appointments</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.patient}</td>
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
