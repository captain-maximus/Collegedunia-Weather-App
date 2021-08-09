import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, SafeAreaView, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

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

  const _renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.listItemStyle}>
          <Text style={styles.fiveDayTextStyle}>{item.date}</Text>
          <Text style={styles.fiveDayTempTextStyle}>
            {item.temp.toFixed(0)}°C
          </Text>
        </View>
        <View style={styles.lineStyle} />
      </View>
    );
  };

  const renderTodaysTemperature = () => {
    return (
      <Animated.View style={[styles.animatedViewStyle, {opacity: animation}]}>
        <Text style={styles.todayTempTextStyle}>
          {data.todayWeather.temp.toFixed(0)}°C
        </Text>
        <Text style={styles.cityTextStyle}>{data.todayWeather.city}</Text>
      </Animated.View>
    );
  };

  const renderFiveDayForcast = () => {
    return (
      <View
        style={{
          flex: 0.4,
          justifyContent: 'flex-end',
        }}>
        <FlatList
          data={data.nextFiveDayTemp}
          renderItem={_renderItem}
          bounces={false}
          ListHeaderComponent={<View style={styles.lineStyle} />}
        />
      </View>
    );
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.containerStyle}>
      {renderTodaysTemperature()}
      {renderFiveDayForcast()}
    </SafeAreaView>
  );
};
export default WeatherForcastScreen;
