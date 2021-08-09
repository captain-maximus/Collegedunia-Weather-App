import {HOME_ACTION_TYPES} from '../types';
import axios from '../../api';

export const fetchWeatherForcastData =
  (longitude, latitude) => async dispatch => {
    console.log('Fetching weather Action Called');
    try {
      dispatch({type: HOME_ACTION_TYPES.GETTING_DATA});
      const currentTemp = await axios.get(
        `/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6df03518d6d8692c90fc83f50b19328d`,
      );
      const next5DayData = await axios.get(
        `/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=6df03518d6d8692c90fc83f50b19328d`,
      );
      console.log(currentTemp, next5DayData);
    } catch (err) {
      console.log('Fetch weather error');
      console.log(err);
    }
  };
