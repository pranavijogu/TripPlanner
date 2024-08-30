import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CityDetail.css'; // Import the CSS file

const CityDetail = () => {
  const { destination } = useParams();
  const [cityData, setCityData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const apiKey = 'daa91c2e9a6f7500593876b2d94bdcde'; // Replace with your OpenWeather API key

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/places?cityname=${encodeURIComponent(destination)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const placesList = data.places1;
        if (!placesList || placesList.length === 0) {
          throw new Error('City details not found');
        }
        setCityData(placesList);
      } catch (err) {
        console.error('Error fetching city data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setWeatherError('Could not fetch weather data. Please try again.');
      }
    };

    fetchCityData();
    fetchWeatherData();
  }, [destination, apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cityData.length === 0) {
    return <div>No data available for {destination}</div>;
  }

  return (
    <div className="cityDetailContainer">
      <div className="cityDetailHeader">
        <h1>Places to visit in {destination}</h1>
      </div>
      {weatherError && <div>Error: {weatherError}</div>}
      {weatherData && (
        <div className="weather-info">
          <h2>Current Weather in {destination}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Accessories to carry:</p>
          <ul>
            {getAccessories(weatherData.main.temp, weatherData.weather[0].description).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="cityDetailDescription">
        {cityData.map((place, index) => (
          <div key={index} className="cityPlace">
            <div className="cityPlaceInfo">
              <h3>{index + 1}. {place.place_name}</h3>
              <p>{place.place_desc}</p>
              <p><span className="bold">Type:</span> {place.place_type}</p>
              <div className="ratings">
                <p><span className="bold">Rating: </span>
                  <span className="ratingsLogo">★</span>
                  <span className="ratingsNumber">{place.Ratings}</span></p>
              </div>
              <p><span className="bold">Best Time to Visit:</span> {place.Best_time_to_visit || '-'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
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

export default CityDetail;