import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Weather.css'; 

import redIconShadow from 'leaflet/dist/images/marker-shadow.png';
import redIcon from './markericon.png';

const redMarkerIcon = new L.Icon({
  iconUrl: redIcon,
  shadowUrl: redIconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'daa91c2e9a6f7500593876b2d94bdcde'; // Replace with your OpenWeather API key

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    }

    setLoading(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  const getAccessories = (temp, weather) => {
    let accessories = [];

    if (temp < 15) {
      accessories.push('Warm clothes', 'Gloves', 'Scarf', 'Hat');
    } else if (temp < 25) {
      accessories.push('Jacket', 'Long pants');
    } else {
      accessories.push('Light clothing', 'Hat', 'Sunglasses');
    }

    if (weather.includes('rain')) {
      accessories.push('Umbrella', 'Raincoat');
    } else if (weather.includes('snow')) {
      accessories.push('Boots', 'Thermal wear');
    } else if (weather.includes('clear')) {
      accessories.push('Sunscreen', 'Hat');
    }

    return accessories;
  };

  return (
    <div className="weather-container">
      <h1>Weather Information</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Accessories to carry:</p>
          <ul>
            {getAccessories(weatherData.main.temp, weatherData.weather[0].description).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="map-container">
            <MapContainer
              center={[weatherData.coord.lat, weatherData.coord.lon]}
              zoom={10}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker 
                position={[weatherData.coord.lat, weatherData.coord.lon]}
                icon={redMarkerIcon}
              >
                <Popup>
                  {weatherData.name} <br /> {weatherData.weather[0].description}.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;