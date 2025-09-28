// src/pages/patient/PatientRecords.jsx
export default function PatientRecords() {
  const records = [
    { id: 1, type: "Blood Test", date: "2025-09-20", file: "blood-test.pdf" },
    { id: 2, type: "X-Ray", date: "2025-08-15", file: "xray-image.pdf" },
  ];

  return (
    <div>
      <h2>Medical Records</h2>
      <ul style={{ marginTop: "20px", paddingLeft: "0", listStyle: "none" }}>
        {records.map((rec) => (
          <li key={rec.id} style={recordStyle}>
            <strong>{rec.type}</strong> - {rec.date} - <button>View</button>
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
