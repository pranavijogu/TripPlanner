import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ChatScreen from './components/chatscreen/ChatScreen';
import DestinationPage from './components/DestinationPage/DestinationPage';
import CityDetail from './components/CityDetail/CityDetail';
import Login from './components/Login/Login';
import Navbar from './components/navbar/Navbar'; // Import Navbar here
import Weather from './components/Weather/Weather';

function App() {
  const [showLogin, setShowLogin] = useState(false); // State to manage login visibility

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar setShowLogin={setShowLogin} /> {/* Pass setShowLogin to Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatscreen" element={<ChatScreen />} />
          <Route path="/destination/:destinationName" element={<DestinationPage />} />
          <Route path="/citydetails/:destination" element={<CityDetail />} />
          <Route path="/weather" element={<Weather />} /> 
        </Routes>
        {showLogin && <Login setShowLogin={setShowLogin} />} {/* Render Login if showLogin is true */}
      </div>
    </BrowserRouter>
  );
}

export default App;
