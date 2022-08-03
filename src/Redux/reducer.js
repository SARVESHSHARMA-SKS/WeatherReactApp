import {
  GET_WATHER_FAILURE,
  GET_WATHER_REQUEST,
  GET_WATHER_SUCCESS,
} from "./actionType";
const weatherData = {
  data: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = weatherData, { type, payload }) => {
  switch (type) {
    case GET_WATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_WATHER_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};