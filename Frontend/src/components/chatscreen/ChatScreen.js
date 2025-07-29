import React, { useState } from 'react';
import './ChatScreen.css';

// --- Helper Components for Displaying Results ---
const FlightCard = ({ flight }) => (
  <div className="card flight-card">
    <h3>✈️ {flight.airline} - {flight.stops}</h3>
    <p><strong>Departure:</strong> {flight.departure}</p>
    <p><strong>Arrival:</strong> {flight.arrival}</p>
    <p><strong>Duration:</strong> {flight.duration}</p>
    <p><strong>Class:</strong> {flight.travel_class}</p>
    <p className="price"><strong>Price:</strong> {flight.price}</p>
  </div>
);

const HotelCard = ({ hotel }) => (
  <div className="card hotel-card">
    <h3>🏨 {hotel.name}</h3>
    <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
    <p><strong>Location:</strong> {hotel.location}</p>
    <p className="price"><strong>Price:</strong> {hotel.price} per night</p>
    <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="details-link">View Details</a>
  </div>
);


const AIRecommendation = ({ title, content }) => (
    <div className="ai-recommendation">
        <h2>{title}</h2>
        <div className="card" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
    </div>
);

const Itinerary = ({ content }) => (
    <div className="itinerary">
        <h2>📅 Your Travel Itinerary</h2>
        <div className="card" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
    </div>
);


// --- Main Travel Planner Component ---

function ChatScreen() {
  // State for form inputs
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [outboundDate, setOutboundDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(new Date(new Date().setDate(new Date().getDate() + 8)).toISOString().split('T')[0]);
  const [searchMode, setSearchMode] = useState('Complete'); // 'Complete', 'FlightsOnly', 'HotelsOnly'

  // State for API results and UI
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('flights');

  const handleSearch = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');
  setResults(null);

  // --- Input Validation ---
  if (!origin || !destination) {
    setError('Please provide both origin and destination airports.');
    setIsLoading(false);
    return;
  }
  if (new Date(outboundDate) >= new Date(returnDate)) {
    setError('Return date must be after the departure date.');
    setIsLoading(false);
    return;
  }

  // --- Prepare API Request ---
  const API_BASE_URL = "https://d4308e39f84f.ngrok-free.app"; 
  let endpoint = '';
  let payload = {};

  const flightData = {
    origin,
    destination,
    outbound_date: outboundDate,
    return_date: returnDate,
  };

  const hotelData = {
    location: destination,
    check_in_date: outboundDate,
    check_out_date: returnDate,
  };

  switch (searchMode) {
    case 'FlightsOnly':
      endpoint = `${API_BASE_URL}/search_flights/`;
      payload = flightData;
      setActiveTab('flights');
      break;
    case 'HotelsOnly':
      endpoint = `${API_BASE_URL}/search_hotels/`;
      payload = hotelData;
      setActiveTab('hotels');
      break;
    case 'Complete':
    default:
      endpoint = `${API_BASE_URL}/complete_search/`;
      payload = flightData;
      setActiveTab('flights');
      break;
  }

  // --- Call API ---
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true', 
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.detail || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setResults(data);

  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};
  
  const renderTabs = () => {
    const tabs = [];
    if (searchMode !== 'HotelsOnly') tabs.push({id: 'flights', label: '✈️ Flights'});
    if (searchMode !== 'FlightsOnly') tabs.push({id: 'hotels', label: '🏨 Hotels'});
    if (results?.ai_flight_recommendation || results?.ai_hotel_recommendation) {
        tabs.push({id: 'recommendations', label: '🏆 AI Recommendations'});
    }
    if (results?.itinerary) tabs.push({id: 'itinerary', label: '📅 Itinerary'});

    return (
        <div className="tabs">
            {tabs.map(tab => (
                <button 
                    key={tab.id} 
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
  }

  const renderContent = () => {
    if (!results) return null;

    switch(activeTab) {
        case 'flights':
            return <div className="grid-container">{results.flights?.map((f, i) => <FlightCard key={i} flight={f} />)}</div>;
        case 'hotels':
            return <div className="grid-container">{results.hotels?.map((h, i) => <HotelCard key={i} hotel={h} />)}</div>;
        case 'recommendations':
            return (
                <div>
                    {results.ai_flight_recommendation && <AIRecommendation title="✈️ AI Flight Recommendation" content={results.ai_flight_recommendation} />}
                    {results.ai_hotel_recommendation && <AIRecommendation title="🏨 AI Hotel Recommendation" content={results.ai_hotel_recommendation} />}
                </div>
            );
        case 'itinerary':
            return <Itinerary content={results.itinerary} />;
        default:
            return null;
    }
  }

  return (
    <div className="travel-planner">
      <header>
        <h1>AI-Powered Travel Planner</h1>
        <p>Find flights, hotels, and get personalized recommendations with AI!</p>
      </header>
      
      <div className="search-mode-selector">
        <label><input type="radio" value="Complete" checked={searchMode === 'Complete'} onChange={(e) => setSearchMode(e.target.value)} /> Complete Search</label>
        <label><input type="radio" value="FlightsOnly" checked={searchMode === 'FlightsOnly'} onChange={(e) => setSearchMode(e.target.value)} /> Flights Only</label>
        <label><input type="radio" value="HotelsOnly" checked={searchMode === 'HotelsOnly'} onChange={(e) => setSearchMode(e.target.value)} /> Hotels Only</label>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="form-section">
          <h2>🛫 Flight Details</h2>
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Departure Airport Code (e.g., HYD for Hyderabad)" required />
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Arrival Airport Code (e.g., GOI for Goa)" required />
          <input type="date" value={outboundDate} onChange={(e) => setOutboundDate(e.target.value)} required />
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
        </div>
        
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : '🔍 Search'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <div className="results-section">
        {isLoading && <div className="loader"></div>}
        {results && (
            <>
                {renderTabs()}
                <div className="tab-content">
                    {renderContent()}
                </div>
            </>
        )}
      </div>
    </div>
  );
}

export default ChatScreen;
