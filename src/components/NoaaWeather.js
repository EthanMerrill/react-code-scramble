/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend} from 'recharts'

const Component = (props) => {
    // destructure props
    const {locationDetails} = props

    // State Variables
    const [forecastData, setForecastData] = useState(null)


    const getWeatherGrid = (lat, lng) => {
        axios({
            method: 'get',
            url: `https://api.weather.gov/points/${lat},${lng}`,
            // responseType: 'stream'
        }).then(resp => {
                console.log(resp.data);
                axios({
                    method: 'get',
                    url: resp.data.properties.forecastGridData,
                    
                }).then(resp => {

                    // setForecastData(resp.data?.properties?.apparentTemperature?.values)
                    setForecastData(resp.data?.properties?.apparentTemperature?.values.map(item => {return ({"name": item.validTime.slice(5,10), "Temp (F)":Math.round(item.value)}) }))
                })
            
        })
    }

    useEffect(() => {
        if (locationDetails) {
            getWeatherGrid(locationDetails.coords.lat, locationDetails.coords.lng)
        }
    }, [locationDetails])

    // JSX return
    return(
        <div className='chart'>
            <AreaChart width={730} height={250} data={forecastData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Temp (F)" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Legend/>
            </AreaChart>

        </div>
    )
}

export default Component