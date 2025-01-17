import React from 'react';
import '../css/Dashboard.css'

const Dashboard = () => {
  const [students, setStudents] = useState(0)
  const [admins, setAdmin] = useState(0)
  const [books, setBooks] = useState(0)
  useEffect(() => {
   axios.get('http://localhost:3000/dashboard')
   .then(res => {
    if(res.data.ok) {
      setStudents(res.data.student)
      setAdmin(res.data.admin)
      setBooks(res.data.book)
    }
   }).catch(err => console.log(err))
      
    }, [])
  
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total books</h2>
        <br/>
        <h2>{books}</h2>
      </div>

      <div className="dashboard-box">
        <h2>Total students</h2>
        <br/>
        <h2>{students}</h2>
      </div>

      <div className="dashboard-box">
        <h2>Total Admins</h2>
        <br/>
        <h2>{admin}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
