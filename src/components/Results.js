/* eslint-disable */
import React, { useEffect, useState, suspense } from "react";
import {animated, useSpring} from 'react-spring'

const Component = (props) => {
    // destructure props
    const { weatherData } = props

    // State Variables
    // const [variableName, setVariableName] = useState(null)
    // const [numb, setNumb] = useState(999);
    // const counterProps = useSpring({ val: numb, from: { val: 0 } });
    //Use Effects
    //useEffect desc
    useEffect(() => {
        console.log(weatherData)


    }, [weatherData])
    // JSX return
    if (weatherData !== null) {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
            <div className="results-box">
                <h2>It feels like {weatherData.temperature.actual} °F </h2>
                <h2>with {weatherData.details}</h2>
                <h2>{weatherData.emoji}</h2>
            </div>
            </React.Suspense>

        )
    } else {
        return (
            <div className="results-box"></div>
        )
    }
}

export default Component