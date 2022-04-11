import logo from './logo.svg';
import './App.css';
import PlaceInput from './components/PlaceInput.js';
import Results from './components/Results.js';
import React, { useEffect, useState, useRef } from "react";

function App() {

  // State Variables
  // const [variableName, setVariableName] = useState(null)
  const [weatherData, setWeatherData] = useState('test');
  

  return (
    <div className="App">
      {/* <head className="App-head">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoTDmp_SD9zRAj1ddmuXlEoTrngHlcWe8&libraries=places"></script>
      </head> */}
      <div className='flex-container'>
        <div className="description">
          <h2>Does it feel like Spring today in:</h2>
        </div>
        <div className="input-container">
          <PlaceInput weatherData={weatherData} setWeatherData={setWeatherData}></PlaceInput>
        </div>
        <div className='Results'>
          <Results weatherData = {weatherData}></Results>
        </div>
      </div>
    </div>
  );
}

export default App;
