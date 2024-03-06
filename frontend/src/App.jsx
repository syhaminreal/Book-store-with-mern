import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books"; 
import Login from "./components/Login"; 
import AddStudent from "./components/AddStudent"; // Import AddStudent component
import Dashboard from "./components/Dashboard"; // Import Dashboard component
import Logout from "./components/Logout";
import axios from "axios";
import EditBook from "./components/EditBook";

function App() {
  const [role, setRole] = useState('')

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole('');
        }
        console.log(res)
      }) 
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar  role={role}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login  setRoleVar ={setRole}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/logout" element={<Logout  setRole ={setRole}/>} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DelteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
