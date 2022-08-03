import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../Redux/action';
import { WeatherDetail} from './WeatherDetail';
import "./Weather.css";
import cityArr from "./CityData"
const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("Munger");
    const [bool, setBool] = useState(false);

    const [cityData, setCityData] = useState([]);
    const [cityList, setCityList] = useState(false);

    useEffect(() => {
           dispatch(getWeatherData(query));
        setBool(true)
    }, []);
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setQuery("")
        setBool(true)
        setCityList(false)
    }
    const handleClick = (event) => {
    setQuery(event);
        setCityList(false);
            getWeatherData(query);
  }

    const cityLocation = () => {
    if (query.trim() === '') {
      setCityData([])
    }
    else {
      let data = cityArr.filter(item => !item.name.toLowerCase().indexOf(query.toLowerCase()))
      let  city= data.map(item => item.name);
      setCityData(city)
    }
  }

    return (
        <div className="first-main">
            <div >
                <span className="map">
                    <i className="fa fa-map-marker">
                </i></span>
            <input className="boxInp" type="text"
                placeholder='enter location'
                    onChange={(e) => { 
                        setQuery(e.target.value)
                        setCityList(true)
                        cityLocation()
                    }}
                    value={query} />
                <span className="srch"  onClick={handleSearch}>
                    <i className="fa fa-search">
                    </i></span>
                 
                {bool && <WeatherDetail/>}

            </div>
            <div  style={{ display: cityList ? "block" : "none",margin:"20px" }}>{cityData?.map(i => <div key={i.id} onClick={() => handleClick(i)} className='boxInp'>{i}
               </div>)}</div>


        </div>
    )
}
export default WeatherSearch;
