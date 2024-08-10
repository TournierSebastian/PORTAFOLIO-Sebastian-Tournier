import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Climate.css';

import  Clima from '../../Download/Images/Cllima.gif';
import { LeagueContext } from '../../Context/LeagueContext';
const Climate = () => {
    const { League } = useContext(LeagueContext); // Accede al contexto para el idioma

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=448f793568eae0815f59491141fa7039&units=metric&lang=${League === 'EN' ? 'en' : 'es'}`
                );
                setWeather(response.data);
            } catch (err) {
                setError('Error fetching weather data');
            }
        };

        fetchWeather();
    }, [League]);

    if (error) return <div>{error}</div>;

    if (!weather) return <div>Loading...</div>;

    const getWeatherClass = () => {
        const condition = weather.weather[0].main.toLowerCase();
        if (condition.includes('clear') || condition.includes('sun')) return 'sunny';
        if (condition.includes('cloud')) return 'cloudy';
        if (condition.includes('rain') || condition.includes('drizzle')) return 'rainy';
        if (condition.includes('snow')) return 'snowy';
        if (condition.includes('thunderstorm')) return 'thunderstorm';
        if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) return 'misty';
        if (condition.includes('dust')) return 'dusty';

        return '';
    };

    const weatherClass = getWeatherClass();
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

    const dateTime = new Date();
    const localTime = dateTime.toLocaleTimeString();
    const roundedTemp = Math.round(weather.main.temp);

    return (
        <div className={`climate-container ${weatherClass}`}>
            <div className="climate-info" >
                <div style={{ display: 'flex' }}>
                    <h1>{roundedTemp} °C</h1>
                    <img src={iconUrl} alt={weather.weather[0].description} className="weather-icon" />
                </div>
                <h3>{weather.weather[0].description}</h3>
                <p>{localTime}</p>
                <p>{weather.name}, {weather.sys.country}</p>
            </div>
                <div> 
                    <img src={Clima} className='Image-Climate'/>
                </div>
            <div>
            </div>
        </div>
    );
};

export default Climate;
