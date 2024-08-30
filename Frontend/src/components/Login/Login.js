import React, { useState } from 'react';
import "./Login.css";
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin, closePopup, mode, setMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        setSuccessMessage('Signup successful! Redirecting to login...');
        setTimeout(() => {
          setMode('login'); // Redirect to login
          setEmail(email); // Set email only, clear password
          setPassword(''); // Clear password field
          setName(''); // Clear name field
          setSuccessMessage(''); // Clear success message
        }, 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        setErrorMessage(errorData.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('Signup error');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        setSuccessMessage('Login successful!');
        setTimeout(() => {
          closePopup(); // Close the popup after successful login
          setSuccessMessage(''); // Clear success message
        }, 2000); // Close popup after 2 seconds
      } else {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        setErrorMessage(errorData.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Login error');
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={mode === "register" ? handleSignup : handleLogin}>
        <div className='login-popup-title'>
          <h2>{mode === "register" ? "Create Account" : "Login"}</h2>
          <img onClick={() => { setShowLogin(false); closePopup(); }} src={assets.cross_icon} alt="close icon"/>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="login-popup-inputs">
          {mode === "register" && (
            <input 
              type='text' 
              placeholder='Enter name' 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          )}
          <input 
            type='email' 
            placeholder='Enter email' 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type='password' 
            placeholder='Enter Password' 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button>{mode === "register" ? "Create Account" : "Login"}</button>
        {mode === "login" && (
          <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>By, continuing I agree to the Terms of Use and Privacy Policy</p>    
          </div>
        )}
        {mode === "login"
          ? <p>Don't have an account? <span onClick={() => setMode("register")}>Sign Up here</span></p>
          : <p>Already have an account? <span onClick={() => setMode("login")}>Login here</span></p>}
      </form>
    </div>
  );
};

export default Login;
