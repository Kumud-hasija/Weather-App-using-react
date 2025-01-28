import React, { useState } from 'react';
import Search from './Search'
import Info from './Info'


export default function WeatherApp(){
    const[weatherInfo , setWeatherInfo] = useState({
        city :"delhi",
        feelsLike : 24.08,
        temp :25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity:47,
        weather:"haze"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <Search updateInfo={updateInfo}/>
            <Info info={weatherInfo}/>
        </div>
    );
}