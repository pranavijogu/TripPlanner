import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ type }) => {
  const navigate = useNavigate();

  const handleChat = () => {
    navigate('/chatscreen');
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">Make Your Trip with AI</h1>
        <p className="headerDesc">
          Get personalized travel recommendations and assistance with our AI-powered chat.
        </p>
        <button className="headerBtn" onClick={handleChat}>
          Chat with AI
        </button>
      </div>
    </div>
  );
};

export default Header;
