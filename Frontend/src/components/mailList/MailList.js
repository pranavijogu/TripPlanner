import React, { useState } from 'react';
import './MailList.css';
import { FaCheckCircle } from 'react-icons/fa'; // Correct import path for FontAwesome icons

const MailList = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track valid email format

  const handleSubscribe = () => {
    // Validate email format
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    // Perform subscription logic here (e.g., send email to server, update database, etc.)
    // For demonstration, we will just set subscribed to true after a short delay
    setTimeout(() => {
      setSubscribed(true);
    }, 1000); // Simulating a delay for demonstration purposes

    setIsSubmitted(true); // Set isSubmitted to true when subscribe button is clicked
  };

  const validateEmail = (email) => {
    // Email validation regex (simple check for abc@gmail.com format)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Reset isValidEmail state on email input change
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
        />
        <button onClick={handleSubscribe} disabled={!email || subscribed}>
          {isSubmitted ? (
            <>
              Subscribed <FaCheckCircle className="doneIcon" />
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </div>
      {!isValidEmail && <p className="errorText">Please enter a valid email address</p>}
    </div>
  );
};

export default MailList;
