import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <h1>{props.data.city}</h1>
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <ul className="weatherToday">
            <li>
              Humidity: <span>{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span>{Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} size={82} />
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
