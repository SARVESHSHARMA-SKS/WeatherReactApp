import React from 'react'
import { useSelector } from 'react-redux'
import {useEffect} from 'react'
import { useState } from "react";
import axios from 'axios';
import "./Weather.css";

export const WeatherDetail = () => {
    const [oneData,setLineOneData] = useState();
    const { data } = useSelector(state => state)
    let id = data?.weather;
        if(id){
        id = id[0].icon
    }
    
      useEffect(()=>{
        if(data&& data.coord){
            getdataofUser(data.coord.lat,data.coord.lon)
        }
    },[data])

    const getdataofUser = async(lat,lon)=>{
        var { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=efcbea2f5bd52d87caa6da2566f468ad`);
        console.log(data);
        setLineOneData(data)
    }
    return (

        <div>
            <div style={{fontSize: '2vw',fontWeight:"1000"}}>Location: {data?.name}</div>
            <div style={{ fontSize: '2vw', fontWeight: "1000" }}>Temperature: {data?.main?.temp}</div>
           
            <div>
                {console.log(oneData)}

                
            </div>
                <div className="mainbox">
                    <div className="leftMainBox">
                        <span >Pressure</span>
                        <span >{oneData && oneData.current.pressure} hpa</span>
                        </div>
                    <div className="rightMainBox">
                        <span >Humidity</span>
                        <span>{oneData && oneData.current.humidity} %</span>
                    </div>
            </div>
                        <div style={{marginLeft:"20px"}}>
                            <img style={{Width:"100%"}} src="https://i.ibb.co/KX3jkQp/sunriseandset.png"  alt="sunriseandset" />
                        </div>





            </div>
    )
}
