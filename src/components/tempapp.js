import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karnataka");

  useEffect(() => {
    const fetchApi = async () => {
        // const apiKey = "08695727e439d780c016c8524c5330baef";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0819d77c19bd20b0aa577d7e843a898d`;
        
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Enter a city"
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
            <div className="Wave -one"></div>
            <div className="Wave -two"></div>
            <div className="Wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
