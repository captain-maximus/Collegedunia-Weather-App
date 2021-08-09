import React, {useEffect} from 'react';
import {View, Text, Platform, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const HomeScreen = () => {
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

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
