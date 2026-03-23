import './Info.css';

function getWeatherMeta(info) {
  if (info.humidity > 80) {
    return {
      icon: "🌧️",
      bg: "linear-gradient(135deg, #2c3e6b 0%, #4a6fa5 50%, #6b8fcf 100%)",
      badge: "Rainy",
    };
  } else if (info.temp > 30) {
    return {
      icon: "☀️",
      bg: "linear-gradient(135deg, #f7971e 0%, #e05b1a 50%, #c0392b 100%)",
      badge: "Hot",
    };
  } else if (info.temp > 15) {
    return {
      icon: "⛅",
      bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 60%, #56c596 100%)",
      badge: "Pleasant",
    };
  } else {
    return {
      icon: "❄️",
      bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      badge: "Cold",
    };
  }
}

export default function Info({ info }) {
  const meta = getWeatherMeta(info);

  return (
    <div
      className="weather-card"
      key={info.city + info.temp}
      style={{ background: meta.bg }}
    >
      {/* Hero */}
      <div className="card-hero">
        <span className="weather-icon">{meta.icon}</span>
        <div className="city-name">{info.city.toUpperCase()}</div>
        <span className="weather-badge">{meta.badge}</span>
        <div className="temp-main">
          {Math.round(info.temp)}<sup>°C</sup>
        </div>
        <p className="weather-desc">{info.weather}</p>
      </div>

      {/* Stats grid */}
      <div className="card-stats">
        <div className="stat-item">
          <span className="stat-icon">🌡️</span>
          <span className="stat-label">Feels Like</span>
          <span className="stat-value">{Math.round(info.feelsLike)}<span>°C</span></span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">💧</span>
          <span className="stat-label">Humidity</span>
          <span className="stat-value">{info.humidity}<span>%</span></span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">⬇️</span>
          <span className="stat-label">Min Temp</span>
          <span className="stat-value">{Math.round(info.tempMin)}<span>°C</span></span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">⬆️</span>
          <span className="stat-label">Max Temp</span>
          <span className="stat-value">{Math.round(info.tempMax)}<span>°C</span></span>
        </div>
      </div>
    </div>
  );
}