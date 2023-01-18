import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import axios from "axios";
import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState();
  const watch = true;
  const { latitude, longitude } = usePosition(watch);

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = "en";
    const units = "metric";
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=${units}`
      );
      setWeather(data);
      console.log(data);
    } catch {
      alert("Error");
    }
  };
  console.log(longitude);
  console.log(latitude);
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="App">
      {!weather ? <Spinner /> : <Weather weather={weather} />}
    </div>
  );
};

export default App;
