import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { GraphChart } from "./GraphChart";
import { useState } from "react";

import axios from "axios";
import "./Weather.css";
import WeatherWeekly from "./WeatherWeekly";


export const WeatherDetail = () => {
    const [oneData, setLineOneData] = useState();
    const [weeklyData, setWeeklyData] = useState([]);
  const { data } = useSelector((state) => state);
  let id = data?.weather;
  if (id) {
    id = id[0].icon;
  }

  useEffect(() => {
    if (data && data.coord) {
      getdataofUser(data.coord.lat, data.coord.lon);
    }
  }, [data]);

  const getdataofUser = async (lat, lon) => {
    var response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=efcbea2f5bd52d87caa6da2566f468ad`
      );
      const { data } = response;
      setLineOneData(data);
      setWeeklyData(response.data.daily);
    };
        let arr = [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
        ];
        let date = new Date();
        let day = date.getDay();
        var currDay;
        currDay = arr.slice(day, day + 8);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          overflowX: "scroll",
        }}
      >
        {weeklyData &&
          weeklyData.map((e, id) => {
            return (
              <WeatherWeekly
                key={id}
                id={id}
                day={currDay[id]}
                temp={e.temp}
                cloud={e.weather[0].main}
              />
            );
          })}
      </div>
      <div>{oneData && <GraphChart data={oneData.hourly} />}</div>

      <div className="mainbox">
        <div className="leftMainBox">
          <span>Pressure</span>
          <span>{oneData && oneData.current.pressure} hpa</span>
        </div>
        <div className="rightMainBox">
          <span>Humidity</span>
          <span>{oneData && oneData.current.humidity} hpa</span>
          <div></div>
        </div>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <img
          style={{ Width: "100%" }}
          src="https://i.ibb.co/KX3jkQp/sunriseandset.png"
          alt="sunriseandset"
        />
      </div>
    </div>
  );
};
