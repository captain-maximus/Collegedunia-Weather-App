import React from 'react';
import {Text, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <LottieView
        style={[styles.genericLoaderStyle, {aspectRatio: 3, flexGrow: 0.3}]}
        source={require('../../assets/loader.json')}
        resizeMode="contain"
        autoPlay
      />
    </View>
  );
};
export default Loader;
