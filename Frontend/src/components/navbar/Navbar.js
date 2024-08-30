import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import Login from '../Login/Login'; // Import Login component

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [mode, setMode] = useState('login'); // State to manage login/register mode
    const navigate = useNavigate();

    const handleSearchButtonClick = () => {
        if (searchQuery.trim()) {
            const formattedQuery = searchQuery.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
            navigate(`/citydetails/${encodeURIComponent(formattedQuery)}`);
        }
    };

    const handleRegisterButtonClick = () => {
        setMode('register');
        setShowRegister(true);
    };

    const handleLoginButtonClick = () => {
        setMode('login');
        setShowLogin(true);
    };

    const handleHomeButtonClick = () => {
        navigate('/');
    };

    const handleWeatherButtonClick = () => {
        navigate('/weather');
    };

    const closeRegisterPopup = () => {
        setShowRegister(false);
    };

    const closeLoginPopup = () => {
        setShowLogin(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchButtonClick();
        }
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="navLeft">
                    <span className="logo">
                        <FontAwesomeIcon icon={faPlane} />
                        <span className="logo-text">TravelAdvisor</span>
                    </span>
                    <button className="homeButton" onClick={handleHomeButtonClick}>Home</button>
                    <button className="weatherButton" onClick={handleWeatherButtonClick}>Weather</button>
                </div>
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search for a destination..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="searchInput"
                    />
                    <button className="searchButton" onClick={handleSearchButtonClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="navItems">
                    <button className="navButton" onClick={handleRegisterButtonClick}>Register</button>
                    <button className="navButton" onClick={handleLoginButtonClick}>Login</button>
                </div>
            </div>
            {showRegister && <Login setShowLogin={setShowRegister} closePopup={closeRegisterPopup} mode={mode} setMode={setMode} />}
            {showLogin && <Login setShowLogin={setShowLogin} closePopup={closeLoginPopup} mode={mode} setMode={setMode} />}
        </div>
    );
};

export default Navbar;
