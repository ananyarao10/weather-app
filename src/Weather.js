import React, { useState } from 'react';
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    // makes a request to the openweathermap api w/ user entered city and api key
    const fetchWeatherData = async () => {
        try {
            const reponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            );
            setWeatherData(reponse.data);
        } catch (error) {
            console.log(error);
        }
    };

    // calls fetchWeatherData when user submits form (enters city)
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    placeholder = "Enter name of a city: "
                    value = {city}
                    onChange = {(event) => setCity(event.target.value)}
                />
                <button type="submit">See Weather</button>
            </form>
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}</p>
                </div> 
            )}
        </div>
    )
};

export default Weather;
