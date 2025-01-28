import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import './Search.css'
export default function Search({updateInfo}){
    let [city , setCity] =useState("");
    let [error , setError]=useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "4bdd1440650f54035f42ce5c4d7afe7e";

    let getInfo = async() =>{
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result ={
            city :city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
       }catch(err){
            throw err;
       }
    };


    let handleChange =(event)=>{
        setCity (event.target.value);
    }

    let handleSubmit =async(event)=>{
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }



    return(
        <div className='SeachBox'>
            <h2>Search for weather forecast</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City name" 
            variant="outlined" 
            required  
            value={city}
            onChange={handleChange}
            />
            <br></br><br></br>
            <Button 
            variant="contained" 
            type="submit"
            > Search </Button>
            </form>
            <br></br><br></br>
            {error && <p style={{color:"red"}}>No such place exists !</p>}
        </div>
    );
}