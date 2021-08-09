import {HOME_ACTION_TYPES} from '../types';
import api from '../../api';
import moment from 'moment';

export const fetchWeatherForcastData =
  (longitude, latitude) => async dispatch => {
    try {
      dispatch({type: HOME_ACTION_TYPES.GETTING_DATA});
      const currentTemp = await api.get(
        `/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6df03518d6d8692c90fc83f50b19328d`,
      );
      const next5DayData = await api.get(
        `/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=6df03518d6d8692c90fc83f50b19328d`,
      );
      let nextFiveDayTemp = getFiveDayForecastData(next5DayData).splice(1);
      let todayWeather = {
        temp: currentTemp.data.main.temp,
        city: currentTemp.data.name,
      };
      dispatch({
        type: HOME_ACTION_TYPES.GETTING_DATA_SUCCESS,
        payload: {todayWeather, nextFiveDayTemp},
      });
    } catch (err) {
      console.log(err);
      dispatch({type: HOME_ACTION_TYPES.ERROR_OCCURRED});
    }
  };

const getFiveDayForecastData = nextFiveDayData => {
  let {list} = nextFiveDayData.data;
  let fiveDayData = [];
  let currentDate = '';
  list.map(item => {
    if (new Date(item.dt_txt).getDate() != currentDate) {
      fiveDayData.push({
        date: moment(item.dt_txt).format('dddd'),
        temp: item.main.temp,
      });
    }
    currentDate = new Date(item.dt_txt).getDate();
  });
  return fiveDayData;
};
