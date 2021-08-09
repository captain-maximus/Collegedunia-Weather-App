import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  todayTempTextStyle: {
    fontWeight: 'bold',
    fontSize: 60,
  },
  lineStyle: {
    width: '100%',
    backgroundColor: '#000',
    height: 0.5,
  },
  listItemStyle: {
    height: 62,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animatedViewStyle: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 25,
    letterSpacing: 2,
  },
  fiveDayTextStyle: {
    fontSize: 18,
    marginLeft: 30,
  },
  fiveDayTempTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 30,
    color: 'rgba(0,0,0,0.7)',
  },
});
