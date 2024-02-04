"use client";
import { useState } from "react";

export const Search = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [data, setData] = useState(false);
  const NEXT_PUBLIC_OPENWEATHER_API_KEY = "0a9c7f3264c47b6626dc979c66f4ce1d";

  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=imperial`
      );

      if (!response.ok) {
        // Handle non-successful response
        throw new Error("Weather data not found");
      }

      const data = await response.json();
      console.log(data.weather[0].main);
      setWeather(data);
      setData(true);
    } catch (err) {
      console.error(err);
      setData(false);
    }
  };

  const convertFahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="text-black p-2 m-2 border border-gray-300"
        type="text"
        placeholder="Enter your city name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button
        className="p-2 m-2 border border-white bg-blue-500 text-white rounded"
        onClick={handleClick}
      >
        Search
      </button>

      {data ? (
        <div className="text-center">
          <p>
            Temperature -{" "}
            {convertFahrenheitToCelsius(weather?.main?.temp).toFixed(2)} °C
          </p>
          <p>Weather Condition - {weather?.weather[0].main}</p>
        </div>
      ) : (
        <p>No value</p>
      )}
    </div>
  );
};
