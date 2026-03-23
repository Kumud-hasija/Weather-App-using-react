import { useState } from 'react';
import Search from './Search';
import Info from './Info';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.08,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="app-title">Live Forecast</p>
        <h1 className="app-headline">
          Weather<br /><span>Dashboard</span>
        </h1>
      </header>

      <Search updateInfo={updateInfo} />
      <Info info={weatherInfo} />

      <p className="app-footer">Know Before You Go</p>
      <p className="app-footer">By - Kumud hasija</p>
    </div>
  );
}
