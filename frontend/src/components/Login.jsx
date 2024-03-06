import React, { useState } from 'react';
import "../css/Login.css";
import axios from 'axios';


const Login = ({setRoleVar}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const history = useHistory(); // Initialize useHistory for navigation
  const navigate = useNavigate()


  axios.defaults.withCredentials = tryue;
  const handleSubmit = () => {
    axios.post('http://loginhost:3000/auth/login', {username, password, role})
      .then(res => {
        if (res.data.login && res.data.role === 'admin') {
          setRoleVar('admin')
          navigate('/dashboard'); // Use history.push for navigation
        } else if (res.data.login && res.data.role === 'student'){
          setRoleVar('student')
          navigate('/'); // Navigate to home page if the role is student
        }
        console.log(res); // Moved console.log inside then block
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option> {/* Corrected value */}
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
