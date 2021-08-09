import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ErrorScreen = ({getLocation}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.errorTextContainerStyle}>
        <Text style={styles.errorTextStyle}>
          Something Went Wrong at our End
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => getLocation()}
        style={styles.retryButtonStyle}>
        <Text style={styles.retryTextStyle}>RETRY</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ErrorScreen;
