import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(40),
    // paddingVertical: verticalScale(20),
  },
  inputField: {
    paddingVertical: horizontalScale(6),
  },
  gradient: {
    flex: 1,
  }
});
