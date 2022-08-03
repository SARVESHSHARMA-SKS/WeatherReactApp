import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../Redux/action';
import { WeatherDetail} from './WeatherDetail';
import "./Weather.css";
const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [bool, showBool] = useState(false)
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setQuery("")
        showBool(true)
    }
    return (
        <div className="first-main">
            <div >
                <span className="map">
                    <i className="fa fa-map-marker">
                </i></span>
            <input className="boxInp" type="text"
                placeholder='enter location'
                onChange={e => setQuery(e.target.value)}
                    value={query} />
                <span className="srch"  onClick={handleSearch}>
                    <i className="fa fa-search">
                    </i></span>
                 
                {bool && <WeatherDetail/>}

                </div>
        </div>
    )
}
export default WeatherSearch;
