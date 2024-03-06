import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Corrected spelling of useNavigate
import '../css/stud.css';

const AddStudent = () => {
    // Define state variables for username, address, password, and roll
    const [roll, setRoll] = useState('');
    const [username, setUsername] = useState('');
    const [useraddress, setUseraddress] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const navigate = useNavigate(); // Corrected spelling of useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/student/register', { roll, username, useraddress, userpassword }) // Corrected role to userpassword
            .then(res => {
               if(res.data.registered){
                navigate('/dashboard'); // Corrected Navigate to navigate and '/dashboard' to '/dashboard'
               }
                console.log(res)
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="student-form-container">
            <div className="student-form">
                <h2>Add Student or User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="roll">Roll</label>
                        <input
                            type="text"
                            id="roll"
                            name="roll"
                            value={roll}
                            onChange={(e) => setRoll(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={useraddress}
                            onChange={(e) => setUseraddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
