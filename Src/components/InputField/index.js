import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { horizontalScale, verticalScale } from '../../screen/Metrics';

import { styles } from './styles';

const InputField = forwardRef((props, ref) => {
  const {
    value,
    placeholder,
    isLeft = false,
    leftIcon = null,
    isRight = false,
    rightIcon = null,
    onChangeText,
    onSubmitEditing,
    backgroundColor = 'white',
    marginHorizontal = 0,
    marginVertical = 0,
    ...restOfProps
  } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          marginHorizontal: horizontalScale(marginHorizontal),
          marginVertical: verticalScale(marginVertical),
          height: verticalScale(51),
        },
      ]}>
      {leftIcon && (
        <View style={styles.leftIconWrapper}>
          <Image
            resizeMode={'contain'}
            style={styles.leftIcon}
            source={leftIcon}
          />
        </View>
      )}
      <View style={styles.inputWrapper}>
          <TextInput
            ref={ref}
            style={styles.input}
            value={value}
            placeholderTextColor={'#FF6700'}
            color={'#FF6700'}
            placeholder={placeholder}
            onChangeText={v => onChangeText(v)}
            onSubmitEditing={() => onSubmitEditing()}
            {...restOfProps}
          />
        
      </View>
      {rightIcon && (
        <View style={styles.rightIconWrapper}>
          <Image
            resizeMode={'contain'}
            style={styles.rightIcon}
            source={rightIcon}
          />
        </View>
      )}
    </View>
  );
});
export default InputField;
