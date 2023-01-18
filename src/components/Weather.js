import React from "react";
import "../styles/Weather.css";

const Weather = ({ weather }) => {
  const date = new Date(weather.dt * 1000).toLocaleDateString();
  const imgsrc = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  let backgroundImg = "";
  switch (weather.weather[0].main.toUpperCase()) {
    case "THUNDERSTORM":
      backgroundImg = "thunderstorm";
      break;
    case "SNOW":
      backgroundImg = "snow";
      break;
    case "RAIN":
      backgroundImg = "rain";
      break;
    case "CLOUDS":
      backgroundImg = "clouds";
      break;
    default:
      backgroundImg = "clear";
  }
  // console.log(weather.weather[0].main.toUpperCase())
  // console.log(backgroundImg)

  return (
    <>
      <div
        className="Weather"
        style={{ backgroundImage: `url(/${backgroundImg}.jpg)` }}
      >
        <h1 className="Weather-Name">{weather.name.toUpperCase()}</h1>
        <h4 className="Weather-CountryCode">{weather.sys.country}</h4>
        <img alt="background" src={imgsrc} className="Weather-img"></img>
        <div className="Weather-W">
          <h2 className="Weather-weatherMain">
            {weather.weather.map((data) => data.main)}
          </h2>
          <h4 className="Weather-weather">
            {weather.weather.map((data) => data.description).join(", ")}
          </h4>
        </div>
        <h1 className="Weather-infoTemp">{weather.main.temp} °C</h1>
        <p className="Weather-infoDate">{date}</p>
      </div>
    </>
  );
};

export default Weather;
