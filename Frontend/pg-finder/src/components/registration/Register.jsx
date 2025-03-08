import React from 'react';
import './Register.css'; // Create a Register.css file for styling

const Register = () => {
  return (
    <div className="register-container">
         <div className="avatar">
        <Avatar sx={{bgcolor:'white'}}>
          <PersonIcon fontSize="large" sx={{ color: "#1976d2" }} />
        </Avatar>
      </div>
      <div className="register-form">
        {/* <h2>Register</h2> */}
        <div className="form-row">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-row">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
        </div>
        <div className="form-row">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-row">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="profile">Profile</label>
          <input type="file" id="hotelImage" name="hotelImage" />
        </div>
        <div className="form-row">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
        <p>Already have an account? {/* <Link to="/login">Login here</Link> */}</p>
      </div>
    </div>
  );
};

export default Register;