import React, {useEffect} from 'react';
import {View, Text, Platform, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {fetchWeatherForcastData} from '../../redux/home/actions';
import {useDispatch, useSelector} from 'react-redux';
import WeatherForcastScreen from '../weatherForcastScreen/WeatherForcastScreen';
import Loader from '../../common/loader';
import ErrorScreen from '../errorScreen/ErrorScreen';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.home.data);
  const error = useSelector(state => state.home.error);

  console.log(data);
  function getLocation() {
    if (Platform.OS == 'android') {
      getLocationPermissions();
    } else {
      getLocationData();
    }
  }

  const getLocationPermissions = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        console.log(data);
        getLocationData();
      })
      .catch(err => {
        Alert.alert(
          'Are you sure?',
          'To get your current location, GPS services should be enabled. Press okay to continue with default location else to get a prompt for location press Enable Location',
          [
            {
              text: 'Enable Location',
              onPress: () => getLocationPermissions(),
            },
            {
              text: 'Okay',
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      });
  };

  const getLocationData = () => {
    Geolocation.getCurrentPosition(
      position => {
        let {longitude, latitude} = position.coords;
        console.log(latitude, longitude);
        dispatch(fetchWeatherForcastData(longitude, latitude));
      },
      error => {
        console.log(error);
        Alert.alert(
          'Location Error',
          'Cannot fetch the location at the moment!!',
          [
            {
              text: 'OK',
            },
          ],
          {cancelable: false},
        );
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (data) {
    return <WeatherForcastScreen />;
  }
  if (error) {
    return <ErrorScreen getLocation={() => getLocation()} />;
  }
  return <Loader />;
};

export default HomeScreen;
