/* eslint-disable */
import React, { useEffect, useState, startTransition, useTransition } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
// import axios from 'axios';
import WeatherEmoji from "weather-emoji"

const Component = (props) => {
    // destructure props
    const { setWeatherData } = props
    const { setLocationDetails } = props
    // State Variables
    const [value, setValue] = useState(null)
    const [focused, setFocused] = useState(false)
    //other functions

    const weatherEmoji = new WeatherEmoji(process.env.REACT_APP_WEATHER_API_KEY);

    //Use Effects
    //useEffect desc
    useEffect(() => {
        if (value != null) {
            try{
                weatherEmoji.getWeather(value.label, false).then(data => setWeatherData(data));
                geocodeByAddress(value.label)
                    .then(results => getLatLng(results[0]))
                    .then(({ lat, lng }) => (
                        value["coords"] = ({ "lat": lat, "lng": lng }),
                        setLocationDetails(value)

                    )
                    )
            } catch {
                setWeatherData(null);
                setLocationDetails('cannot find weather for that location')
            }
        } else {
            setWeatherData(null);
        }
    }, [value])

    useEffect(() => {
        if (focused) {
            startTransition(() => {
                setWeatherData(null);
                setLocationDetails(null);
            })
        }
    }, [focused])

    // JSX return
    return (
        <>
            <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                selectProps={{
                    value,
                    onChange: setValue,
                    isClearable: "true",
                    onFocus: setFocused,

                }}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: ['US'],
                    }
                }}
            />
        </>
    )
}

export default Component