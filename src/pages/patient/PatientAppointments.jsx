// src/pages/patient/PatientAppointments.jsx
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db, auth } from "../../services/firebase";

export default function PatientAppointments() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Fetch doctors from Firestore
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", "doctor"));
        const querySnapshot = await getDocs(q);

        console.log("Total doctors found:", querySnapshot.size);
        querySnapshot.forEach(doc => {
          console.log("Doctor doc:", doc.id, "=>", doc.data());
        });

        const doctorList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctors(doctorList);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchDoctors();
  }, []);

  // Handle appointment booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDoctor || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        doctorId: selectedDoctor,
        patientId: auth.currentUser.uid,
        date,
        time,
        status: "pending",
        createdAt: new Date(),
      });
      alert("Appointment booked successfully!");
      setSelectedDoctor("");
      setDate("");
      setTime("");
    } catch (err) {
      console.error("Error booking appointment:", err);
      alert("Error booking appointment");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          {doctors.length === 0 ? (
            <option disabled>No doctors found</option>
          ) : (
            doctors.map((doc) => (
              <option key={doc.id} value={doc.uid}>
                {doc.name} ({doc.email})
              </option>
            ))
          )}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "300px",
};
