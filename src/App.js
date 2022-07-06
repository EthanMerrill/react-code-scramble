import './style/App.css';
import './style/style.scss'
import PlaceInput from './components/PlaceInput.js';
import NoaaWeather from './components/NoaaWeather.js';
import React, { useState } from "react";
import ErrorBoundary from './components/ErrorBoundary.js';


const Results = React.lazy(() => import('./components/Results.js'));

function App() {

  // State Variables
  // const [variableName, setVariableName] = useState(null)
  const [weatherData, setWeatherData] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);

  return (
    <div className="App">
      <div className='centering-container'>
        <div className='flex-container'>
          <div className="description">
            <h2>Does it feel like Spring today in:</h2>

            <PlaceInput weatherData={weatherData} setWeatherData={setWeatherData} setLocationDetails={setLocationDetails}></PlaceInput>
          </div>
          <React.Suspense fallback={<div>Everything is Loading...</div>}>
          <div className='Results'>
            <ErrorBoundary>
              <Results weatherData={weatherData}></Results>
              <NoaaWeather locationDetails={locationDetails}></NoaaWeather>
            </ErrorBoundary>
          </div>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
