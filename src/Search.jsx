import { useState } from 'react';
import './Search.css';

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log(API_URL);
console.log(API_KEY);

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getInfo = async (cityName) => {
    const response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const json = await response.json();
    return {
      city: json.name,
      temp: json.main.temp,
      tempMin: json.main.temp_min,
      tempMax: json.main.temp_max,
      humidity: json.main.humidity,
      feelsLike: json.main.feels_like,
      weather: json.weather[0].description,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError(false);
    try {
      const info = await getInfo(city.trim());
      updateInfo(info);
      setCity("");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-card">
      <p className="search-label">🌍 Search City</p>
      <form className="search-row" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Enter city name…"
          value={city}
          onChange={(e) => { setCity(e.target.value); setError(false); }}
        />
        <button className="search-btn" type="submit" disabled={loading}>
          {loading ? "⏳" : "🔍"}
        </button>
      </form>
      {error && (
        <p className="error-msg">⚠️ City not found. Please check the spelling.</p>
      )}
    </div>
  );
}
