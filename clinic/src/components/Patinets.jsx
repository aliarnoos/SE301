import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../App";

function Patinets({ row }) {
  // const name = document.querySelector("#aaname");
  // const phone = document.querySelector("#phone");
  // const age = document.querySelector("#age");
  const [inputValue, setInputValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  const colRef = collection(db, "patients");
  const addPat = () => {
    addDoc(colRef, {
      name: inputValue,
      phone: phoneValue,
      age: ageValue,
    });
    setInputValue("");
    setPhoneValue("");
    setAgeValue("");
  };
  // const input = useRef();

  return (
    <div className="patients">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Age</th>
          <th>Profile</th>
        </tr>
        {row}
      </table>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="aaname"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
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
        <button onClick={() => addPat()}>Add Patinet</button>
      </div>
    </div>
  );
}

export default Patinets;
