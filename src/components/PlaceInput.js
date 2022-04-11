/* eslint-disable */
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import axios from 'axios';
import WeatherEmoji from "weather-emoji"


const Component = (props) => {
    // destructure props
    const {weatherData, setWeatherData} = props


    const [value, setValue] = useState("null");
    //other functions

    const weatherEmoji = new WeatherEmoji(process.env.REACT_APP_WEATHER_API_KEY);
    console.log(process.env.REACT_APP_WEATHER_API_KEY)
    const getEmojiWeather = (place) => {
    
    }

    const getWeather = (lat, lng) => {
    axios({
        method: 'get',
        url: `https://api.weather.gov/points/${lat},${lng}`,
        // responseType: 'stream'
    })
        .then(resp => {
            console.log(resp.data);
            
        })
    }
    //Use Effects
        //useEffect desc
    useEffect(()=> {
        console.log(value)
        geocodeByAddress(value.label)
            .then(results => getLatLng(results[0]))
            // .then(({ lat, lng }) =>
            //     // console.log('Successfully got latitude and longitude', { lat, lng })
            //     getWeather(lat, lng)
                
            // );
        weatherEmoji.getWeather(value.label, false).then(data => setWeatherData(data));
    },[value])
    // JSX return
    return(
        <>
            <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                selectProps={{
                    value,
                    onChange: setValue,
                }}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: ['us'],
                    }
                }}
            />
        </>
    )
}

export default Component