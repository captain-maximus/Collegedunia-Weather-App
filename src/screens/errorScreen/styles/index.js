import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  errorTextContainerStyle: {
    flex: 0.6,
    justifyContent: 'flex-end',
  },
  errorTextStyle: {
    fontSize: 50,
    fontWeight: '600',
    marginLeft: 30,
    width: '80%',
  },
  retryButtonStyle: {
    borderColor: 'rgba(0,0,0,0.7)',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  retryTextStyle: {
    margin: 15,
    marginHorizontal: 40,
  },
});
