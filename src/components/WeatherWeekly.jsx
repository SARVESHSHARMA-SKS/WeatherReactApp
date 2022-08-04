import React from "react";
import "./Weather.css";

const WeatherWeekly = (props) => {
  const { id, day,temp, cloud } = props;
  return (
    <div  style={{ display: "flex", flexDirection: "column"}} id={id}>
      <div style={{ fontWeight: "bold" }}>{day}</div>
      <div>
        <span style={{ fontWeight: "bold" }}>
          {`${temp.min}`.split(".")[0]}
          <sup>° &nbsp;</sup>
        </span>
        <span style={{ fontWeight: "bold" }}>
          {`${temp.max}`.split(".")[0]}
          <sup>° &nbsp;</sup>
        </span>
      </div>
      <p>
        <img
          src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
          alt="Clear"
        />
      </p>
      <div style={{ fontWeight: "bold" }}>{cloud}</div>
    </div>
  );
};

export default WeatherWeekly;
