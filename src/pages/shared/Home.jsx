import { Link } from "react-router-dom";

export default function HeroPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      gap: "20px"
    }}>
      <h1>Welcome to Smart Healthcare</h1>
      <p>Your digital solution for managing appointments and health records.</p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/login">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>Login</button>
        </Link>
        <Link to="/register">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>Register</button>
        </Link>
      </div>
    </div>
  );
}
