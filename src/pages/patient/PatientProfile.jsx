// src/pages/patient/PatientProfile.jsx
export default function PatientProfile() {
  return (
    <div>
      <h2>Profile</h2>
      <div style={profileStyle}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +91 1234567890</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

const profileStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  maxWidth: "400px",
};
