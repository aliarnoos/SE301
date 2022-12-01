import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../App";
import AppointTR from "./AppointTR";
import { useState, useEffect } from "react";

const name = document.querySelector("#pname");
const phone = document.querySelector("#phone");
const age = document.querySelector("#age");
const date = document.querySelector("#date");
const doctor = document.querySelector("#doctor");
function Appoint() {
  const colRef = collection(db, "appoints");
  const [inputValue, setInputValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [doctorValue, setDoctorValue] = useState("");

  const makeAppoint = () => {
    addDoc(colRef, {
      name: inputValue,
      phone: phoneValue,
      age: ageValue,
      date: dateValue,
      doctor: doctorValue,
    });
    setInputValue("");
    setPhoneValue("");
    setAgeValue("");
    setDoctorValue("");
  };
  const [patientsT, setPatinetsT] = useState();
  const fetchP = () => {
    onSnapshot(colRef, (snapshot) => {
      let patinets = [];
      snapshot.docs.forEach((doc) => {
        patinets.push({ ...doc.data(), id: doc.id });
      });
      setPatinetsT(() =>
        patinets.map((patinet) => (
          <AppointTR
            name={patinet.name}
            age={patinet.age}
            phone={patinet.phone}
            id={patinet.id}
            key={patinet.id}
            date={patinet.date}
            doctor={patinet.doctor}
          />
        ))
      );
    });
  };

  useEffect(() => {
    fetchP();
  }, []);
  return (
    <div className="appoint">
      <table>
        <tr>
          <th>name</th>
          <th>phone number</th>
          <th>age</th>
          <th>Doctor</th>
          <th>Date</th>
          <th>Delete</th>
          <th>Status</th>
        </tr>
        {patientsT}
      </table>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={inputValue}
          name="name"
          id="pname"
          onChange={(e) => setInputValue(e.target.value)}
        />{" "}
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="telephone"
          name="phone"
          id="phone"
          onChange={(e) => setPhoneValue(e.target.value)}
          value={phoneValue}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAgeValue(e.target.value)}
          value={ageValue}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          onChange={(e) => setDateValue(e.target.value)}
          value={dateValue}
        />
        <label for="doctor">Choose a doctor:</label>
        <select
          id="doctor"
          name="doctor"
          onChange={(e) => setDoctorValue(e.target.value)}
          value={doctorValue}
        >
          <option value="Ali">Dr. Ali Muhsin</option>
          <option value="Ahmed">Dr. Ahmed Noor</option>
          <option value="Zaid">Dr. Zaid Alaa</option>
          <option value="Yousif">Dr. Yousif Mohammed</option>
        </select>
        <button onClick={() => makeAppoint()}>Book</button>
      </div>
    </div>
  );
}

export default Appoint;
