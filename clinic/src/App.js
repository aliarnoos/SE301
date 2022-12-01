import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Appoint from './components/Appoint';
import { initializeApp } from "firebase/app";
import { useState, useEffect } from 'react';
import PatientTR from './components/PatientTR';
import Patinets from './components/Patinets'
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import Login from './components/Login';
import Profile from './components/Profile';
import Payment from './components/Payment';
import Footer from './components/Footer';
import About from './components/About';

const firebaseConfig = {
  apiKey: "AIzaSyAqEBmSoSMn-RuflxK3pVRCs4tPmsbX0Vc",
  authDomain: "se301-200b1.firebaseapp.com",
  projectId: "se301-200b1",
  storageBucket: "se301-200b1.appspot.com",
  messagingSenderId: "822680097359",
  appId: "1:822680097359:web:22772236bf812a7f74d03a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

function App() {

const colRef = collection(db, 'patients')


  const [patientsT, setPatinetsT] = useState();
  const fetchP = () => {onSnapshot(colRef, (snapshot) => {
    let patinets =[]
    snapshot.docs.forEach(doc => {
      patinets.push({ ...doc.data(), id: doc.id })
    })
    setPatinetsT(()=> patinets.map(patinet => <PatientTR name={patinet.name} age={patinet.age} phone={patinet.phone} id={patinet.id} key={patinet.id}/> )) 
    console.log(patinets)
  })}

  useEffect(()=>{
    fetchP()
  }, [])
  return (

    <BrowserRouter>
      <div className="App">
        <Nav/>
        <img src='/imgs/banner.svg' alt='banner' className='banner'/>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/patinets" exact element={<Patinets row ={patientsT}/>}/>
          <Route path="/appoint"  element={<Appoint/>}/>
          <Route path="/:id"  element={<Profile row ={patientsT}/>}/>
          <Route path="/payment"  element={<Payment/>}/>
          <Route path="/about"  element={<About/>}/>



        </Routes>
        <Footer/>
      </div>
    </BrowserRouter> 

      
  );
}

export default App;
