import React, { useState } from 'react';
import './SignupPage.css'; 
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    isEmail: false,
    emailOrPhone: '',
    month: '',
    date: '',
    year: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    navigate('/dashboard');
  };

  const toggleEmailPhone = () => {
    setFormData({
      ...formData,
      isEmail: !formData.isEmail,
      emailOrPhone: '',
    });
  };











  

  return (
    <div className="signup-container">
     <img src="https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mm~nRHy0ENWlr-PEClkDuKz8fMvkMeopWFhfB~yr2boWos6Z2aNiNcZmOPzLx67~b2r5lWUZb-TTqGv5yq5tuytZkHfMWLOiCR41vdplU1rIL~0w~cdxUh8FkfNUsbZHoQ~PgyiJEEbGwN38GvyI9ixl-KZj5kns5c9lknavf4hJYTJ2-83tgQvkoLMPB042SGg69x6YKI1WQlNLHHuWWr-J3XxmKoqiZSfiEkOtvSTKsZ2mtt6jliy04DiN-bCSdSd-ktRFxHEvGSGAjSjZx1O9Km82MbKWvKtwG05rPWtMt5ryzQ75iAmMJxBnt1GW~2AzziIgc~8~ReUO5SFQWQ__" alt="Twitter Logo" className="twitter-logo-small" />
       
      <h3>create an account</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {formData.isEmail ? 'Email' : 'Phone number'}:
          <input
            type={formData.isEmail ? 'email' : 'tel'}
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
          />
        </label>
        <button className="toggel" type="button" onClick={toggleEmailPhone}>
          {formData.isEmail ? 'Use Phone Number' : 'Use Email'}
        </button>
        <label>
        <h4>Birthdate</h4>
        <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus 
        metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit </p>
          <div>
            <input
              type="number"
              placeholder="Month"
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
