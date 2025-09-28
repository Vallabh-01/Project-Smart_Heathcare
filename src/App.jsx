// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/shared/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useAuth } from "./context/AuthContext";

// Layout
import DashboardLayout from "./layout/DashboardLayout";

// Patient Pages
import PatientHome from "./pages/patient/PatientHome";
import PatientAppointments from "./pages/patient/PatientAppointments";
import PatientRecords from "./pages/patient/PatientRecords";
import PatientProfile from "./pages/patient/PatientProfile";

// Doctor Pages
import DoctorHome from "./pages/doctor/DoctorHome";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorRecords from "./pages/doctor/DoctorRecords";
import DoctorProfile from "./pages/doctor/DoctorProfile";

function ProtectedRoute({ children, role }) {
  const { user, profile, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (role && profile?.role !== role) return <p>Access denied.</p>;

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Patient Dashboard with nested routes */}
        // Patient Dashboard
        <Route
          path="/patient/dashboard"
          element={
            <ProtectedRoute role="patient">
              <DashboardLayout role="patient" />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientHome />} />
          <Route path="appointments" element={<PatientAppointments />} />
          <Route path="records" element={<PatientRecords />} />
          <Route path="profile" element={<PatientProfile />} />
        </Route>

        {/* Doctor Dashboard */}
        <Route
          path="/doctor/dashboard"
          element={
            <ProtectedRoute role="doctor">
              <DashboardLayout role="doctor" />
            </ProtectedRoute>
          }
        >
          <Route index element={<DoctorHome />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="records" element={<DoctorRecords />} />
          <Route path="profile" element={<DoctorProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
