import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  Animated,
} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const height = Dimensions.get('window').height;

const WeatherForcastScreen = () => {

  const data = useSelector(state => state.home.data);
  
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      timing: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const renderTodaysTemperature = () => {
    return (
      <Animated.View style={[styles.animatedViewStyle, {opacity: animation}]}>
        <Text style={styles.todayTempTextStyle}>{data.temp.toFixed(0)}°C</Text>
        <Text style={styles.cityTextStyle}>{data.city}</Text>
      </Animated.View>
    );
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.containerStyle}>
      {renderTodaysTemperature()}
    </SafeAreaView>
  );
};
export default WeatherForcastScreen;
