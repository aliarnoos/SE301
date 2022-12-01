import { db } from "../App";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";

function AppointTR({ name, phone, age, date, doctor, id }) {
  const [done, setDone] = useState(false);
  const docRef = doc(db, "appoints", id);
  const delA = () => {
    deleteDoc(docRef);
  };

  return (
    <tr style={{ color: done ? "gray" : "black" }}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{age}</td>
      <td>Dr. {doctor}</td>
      <td>{date}</td>
      <td>
        <button onClick={() => delA()}>Delete</button>
      </td>
      <td>
        {done ? "" : <button onClick={() => setDone(true)}>Done</button>}
        {/* <input
          type="radio"
          name="done"
          id="done"
          onClick={() => setDone(true)}
        /> */}
      </td>
    </tr>
  );
}

export default AppointTR;
