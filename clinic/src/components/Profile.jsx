import { useNavigate, useParams } from "react-router";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../App";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function Profile() {
  const params = useParams();
  console.log(params.id);
  const docRef = doc(db, "patients", params.id);
  const [info, setInfo] = useState();

  async function handleDoc() {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setInfo(
          <div>
            <h1>Name: {docSnap.data().name}</h1>
            <h3>Phone Number: {docSnap.data().phone}</h3>
            <h3>Age: {docSnap.data().age}</h3>
          </div>
        );
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleDoc();
  }, []);
  const rec = document.querySelector("#rec");
  const colRef = collection(db, "recipe");
  const addRec = () => {
    addDoc(colRef, {
      recipe: rec.value,
      patiientID: params.id,
    });
    rec.value = "";
  };

  const his = document.querySelector("#his");
  const colRefH = collection(db, "history");
  const addHis = () => {
    addDoc(colRefH, {
      history: his.value,
    });
    his.value = "";
  };
  const naviagte = useNavigate();
  const handleDelete = async () => {
    await deleteDoc(doc(db, "patients", params.id));
    naviagte("/patinets");
  };
  return (
    <div className="profile">
      <div className="info-pro">
        <img src="/imgs/profile.webp" alt="porfile" />
        {info}
        <button onClick={() => handleDelete()}>Delete Profile</button>
      </div>
      <div className="input-med">
        <input type="text" name="rec" id="rec" placeholder="Medical Recipe " />
        <button onClick={() => addRec()}>Add Medical Recipe</button>
        <textarea
          type="text"
          name="his"
          id="his"
          placeholder="Medical History "
        />
        <button onClick={() => addHis()}>Add Medical History</button>
      </div>
    </div>
  );
}

export default Profile;
