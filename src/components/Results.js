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

    if (weatherData !== null) {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
            <div className="results-box">
                <h3>It feels like {weatherData.temperature.actual} °F </h3>
                <h3>with {weatherData.details}</h3>
                <h1>{weatherData.emoji}</h1>
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