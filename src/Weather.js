import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn-btn-primary" />
          </div>
        </div>
      </form>
      <h1>Odessa</h1>
      <ul>
        <li>Monday 13:30</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
          29°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 45%</li>
            <li>Wind 19 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
