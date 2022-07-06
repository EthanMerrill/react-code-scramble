/* eslint-disable */
import React, { startTransition, useEffect, useState } from "react";
import axios from 'axios';
import { AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, ResponsiveContainer } from 'recharts'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)


const Component = (props) => {
    // destructure props
    const { locationDetails } = props

    // State Variables
    const [forecastData, setForecastData] = useState(null)

    const gridUrl = useSWR(locationDetails ? `https://api.weather.gov/points/${locationDetails.coords.lat},${locationDetails.coords.lng}` : null, fetcher, { suspense: true })
    const NOAAData = useSWR(() => gridUrl?.data?.properties?.forecastGridData, fetcher, { suspense: true })
    // console.log(NOAAData?.data?.properties)
    // console.log(NOAAData?.data?.properties)

    useEffect(() => {
        setForecastData(NOAAData?.data?.properties?.apparentTemperature?.values.map(item => { return ({ "name": item.validTime.slice(5, 10), "Temp (F)": Math.round(item.value) }) }))

    }, [locationDetails])

    // JSX return
    return (
        <React.Suspense fallback={<div className="loading-field chart">Loading...</div>}>
            <h2 className="chart-label">10 Day Forecast</h2>
            <div className='chart'>
                <ResponsiveContainer width='100%' height={300}>
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
                        <Legend />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </React.Suspense>

    )
}

export default Component