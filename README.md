# AI Travel Planning System

An intelligent travel platform that combines real-time flight/hotel data with AI-powered multi-agent analysis for personalized recommendations and automated itinerary generation.

**[Demo Video](#)** 

https://github.com/user-attachments/assets/9278f7e7-1e25-485d-bd9f-7bb34421d4db
---

## Features

- **Real-time flight and hotel search via SerpAPI**  
  Live pricing and availability data from Google Flights and Hotels

- **Multi-agent AI system for intelligent travel analysis**  
  Specialized AI agents work together to analyze and recommend optimal travel options

- **Automated itinerary generation with activities and dining**  
  Complete day-by-day travel plans generated automatically by AI

- **Dynamic currency support (USD/INR)**  
  Automatic currency conversion based on travel route and location

- **Smart airport-to-city mapping for accurate searches**  
  Converts airport codes to city names for precise hotel location searches

---

## Tech Stack

- **Frontend**: React.js, JavaScript, CSS Modules  
- **Backend**: FastAPI, Python, Uvicorn, Pydantic  
- **AI/ML**: CrewAI, Mistral LLM, LangChain  
- **APIs**: SerpAPI (Google Flights/Hotels)  
- **Deployment**: Ngrok tunneling  

---

## AI Agents

- **Flight Analyst**: Analyzes flight options based on price, duration, and stops  
- **Hotel Analyst**: Evaluates hotels by price, rating, and location  
- **Travel Planner**: Creates comprehensive day-by-day itineraries  

---

## API Endpoints

- `POST /search_flights/` – Flight search with AI analysis  
- `POST /search_hotels/` – Hotel recommendations  
- `POST /complete_search/` – Full travel planning with all agents  
