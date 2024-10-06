import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather() {
    var weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e078e3603ae8b7ceae7c8579e46bcc8&units=metric`
    );
    weatherData.then(function (success) {
      console.log(success.data);
      setWeather(success.data.weather[0].main);
      setTemp(success.data.main.temp);
      setDesc(success.data.weather[0].description);
      setShowWeather(true); 
    });
  }

  const getWeatherEmoji = () => {
    switch (weather.toLowerCase()) {
      case "clear":
        return "☀️";
      case "clouds":
        return "☁️";
      case "rain":
        return "🌧️";
      case "snow":
        return "❄️";
      case "thunderstorm":
        return "⛈️";
      case "drizzle":
        return "🌦️";
      case "mist":
        return "🌫️";
        case "haze":
            return "🌫️";
      default:
        return "";
    }
  };

  return (
    <div className="text-center my-10 p-20 text-white">
      <div className="max-w-md mx-auto">
        <h1 className="font-bold text-4xl mb-4">Weather Report</h1>
        <p className="text-lg font-medium mb-6">
          I can give you the weather report of a city!
        </p>
        <input
          className="w-full p-3 rounded-lg mb-4 text-black"
          type="text"
          placeholder="Enter city name"
          onChange={handleCity}
        />
        <br />
        <button
          onClick={getWeather}
          className="text-green-400 font-bold border-solid border-2 rounded-md shadow-md mt-2 p-2 mix-blend-overlay backdrop-blur-md hover:bg-indigo-500 hover:text-white transition duration-300"
        >
          Get Report
        </button>

        
        {showWeather && (
          <div className="mt-8">
            <h1 className="text-3xl mb-2">
              <b>Weather:</b> <span className="text-green-400">{weather}</span>{" "}
              {getWeatherEmoji()}
            </h1>
            <p className="text-xl mb-1">
              <b>Temperature:</b>{" "}
              <span className="text-green-400">{temp}°C</span>
            </p>
            <p className="text-lg">
              <b>Description:</b>{" "}
              <span className="text-green-400">{desc}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
