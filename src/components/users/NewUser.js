import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const NewUser = () => {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/users', {
      fullname: name, 
      email: email 
    })
    .then(function (response) {
      navigate('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <h1 className="page-title"> Create New User </h1>
      <form className="user-form" onSubmit={submitForm}>
        <label>Full Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <div className="btn-div">
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
}
 
export default NewUser;