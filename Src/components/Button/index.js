import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { horizontalScale, verticalScale } from '../../screen/Metrics';

import { styles } from './styles';

const Button = props => {
  const {
    bgColor = '#F3401F',
    textColor = 'white',
    width = 237,
    height = 50,
    radius = 5,
    fontSize = 20,
    letterSpacing = 5,
    label,
    marginVertical = 0,
    onPress,
    ...restProps
  } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        height: verticalScale(height),
        width: horizontalScale(width),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: horizontalScale(radius),
        marginTop: verticalScale(marginVertical),
      }}
      onPress={onPress}
      // {...restProps}
    >
      <Text
        style={{
          fontSize: horizontalScale(fontSize),
          color: textColor,
          letterSpacing: horizontalScale(letterSpacing),
          fontFamily: 'RobotoCondensed',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
