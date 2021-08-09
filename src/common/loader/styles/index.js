import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  genericLoaderStyle: {
    width: SCREEN_WIDTH * 0.1,
    aspectRatio: 2,
    flexGrow: 1,
    alignSelf: 'center',
  },
});
