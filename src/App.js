import './style/App.css';
import './style/style.scss'
import PlaceInput from './components/PlaceInput.js';
import Results from './components/Results.js';
import NoaaWeather from './components/NoaaWeather.js';
import React, { useEffect, useState, useRef } from "react";

function App() {

  // State Variables
  // const [variableName, setVariableName] = useState(null)
  const [weatherData, setWeatherData] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);

  return (
    <div className="App">
      {/* <head className="App-head">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoTDmp_SD9zRAj1ddmuXlEoTrngHlcWe8&libraries=places"></script>
      </head> */}
      <div className='centering-container'>
      <div className='flex-container'>
        <div className="description">
          <h2>Does it feel like Spring today in:</h2>

          <PlaceInput weatherData={weatherData} setWeatherData={setWeatherData} setLocationDetails = {setLocationDetails}></PlaceInput>
        </div>
        <div className='Results'>
          <Results weatherData = {weatherData}></Results>
          <NoaaWeather locationDetails = {locationDetails}></NoaaWeather>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
