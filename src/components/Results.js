/* eslint-disable */
import React, { useEffect, useState } from "react";

const Component = (props) => {
    // destructure props
    const {weatherData} = props

    // State Variables
    // const [variableName, setVariableName] = useState(null)

    //Use Effects
        //useEffect desc
    useEffect(()=> {
        console.log(weatherData)
    },[weatherData])
    // JSX return
    return(
        <>
        <h1>{weatherData.details}</h1>
        <h2>{weatherData.temperature.actual}</h2>
        <h3>{weatherData.emoji}</h3>

        </>
    )
}

export default Component