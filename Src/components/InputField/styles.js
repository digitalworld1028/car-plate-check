import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import {horizontalScale, verticalScale} from '../../screen/Metrics';
import { version } from 'react';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#FF6700',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIconWrapper: {
    paddingHorizontal: horizontalScale(15),
  },
  leftIcon: {
    width: horizontalScale(16),
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    paddingHorizontal: 0,
    width: '100%',
  },
  rightIconWrapper: {
    paddingHorizontal: horizontalScale(15),
  },
  rightIcon: {
    width: horizontalScale(16),
  },
});
