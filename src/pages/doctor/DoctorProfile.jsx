export default function DoctorProfile() {
  return (
    <div>
      <h2>Profile</h2>
      <div style={profileStyle}>
        <p><strong>Name:</strong> Dr. Smith</p>
        <p><strong>Email:</strong> drsmith@example.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
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
