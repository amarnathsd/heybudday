
import React, { useState } from 'react';
import './LoginPage.css'; 
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account creation data:', formData);
    
  };

  return (
    <div className="Login-form">
                              
      <form onSubmit={handleSubmit}>
       
      <h3>Login to the Twitter</h3>
        <label>
          Name
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Phone number
          <input type="text" name="phoneNumber" onChange={handleInputChange} />
        </label>
        <button type="submit">Next</button>
        <div style={{ display: 'flex' }}>
        
        <div className='signupbtn'><Link to="/signup">Sign up to Twitter</Link></div>
      </div>

      </form>
      
     
    </div>
  );
};

export default Login;
