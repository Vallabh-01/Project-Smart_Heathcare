export default function DoctorRecords() {
  const records = [
    { id: 1, patient: "John Doe", type: "Blood Test", date: "2025-09-20" },
    { id: 2, patient: "Jane Smith", type: "X-Ray", date: "2025-08-15" },
  ];

  return (
    <div>
      <h2>Patient Records</h2>
      <ul style={{ marginTop: "20px", paddingLeft: "0", listStyle: "none" }}>
        {records.map((rec) => (
          <li key={rec.id} style={recordStyle}>
            <span>{rec.patient} - {rec.type} ({rec.date})</span>
            <button>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const recordStyle = {
  background: "#fff",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
