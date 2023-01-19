import React from "react";
import "../styles/Weather.css";

const Weather = ({ weather }) => {
  const date = new Date(weather.dt * 1000).toLocaleDateString();
  const imgsrc = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  let backgroundImg = "";
  switch (weather.weather[0].main.toUpperCase()) {
    case "THUNDERSTORM":
      backgroundImg =
        "https://user-images.githubusercontent.com/113860249/213545169-ff49a59b-ae0a-4fb9-af3f-acb9a0161cec";
      break;
    case "SNOW":
      backgroundImg =
        "https://user-images.githubusercontent.com/113860249/213545089-f2267f07-573b-4b67-86f7-b968d690c52e";
      break;
    case "RAIN":
      backgroundImg =
        "https://user-images.githubusercontent.com/113860249/213545037-56fecc49-0828-4da6-9be3-800cf5923e59";
      break;
    case "CLOUDS":
      backgroundImg =
        "https://user-images.githubusercontent.com/113860249/213544895-8a0bd13e-2446-4c7b-a044-2b7a23814ebd";
      break;
    default:
      backgroundImg =
        "https://user-images.githubusercontent.com/113860249/213544406-b9a85f86-fb83-400d-b59c-319800a678a3";
  }
  // console.log(weather.weather[0].main.toUpperCase())
  // console.log(backgroundImg)

  return (
    <>
      <div
        className="Weather"
        style={{ backgroundImage: `url(${backgroundImg}.jpg)` }}
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
