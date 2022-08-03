import axios from "axios";
import {
  GET_WATHER_FAILURE,
  GET_WATHER_REQUEST,
  GET_WATHER_SUCCESS,
} from "./actionType";

 export const getWeatherData = (city) => async (dispatch) => {
  try {
    dispatch({ type: GET_WATHER_REQUEST });
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=efcbea2f5bd52d87caa6da2566f468ad`
    );
    dispatch({ type: GET_WATHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_WATHER_FAILURE, payload: error.message });
  }
};