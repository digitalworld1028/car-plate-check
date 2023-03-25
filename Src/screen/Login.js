import React, {useState} from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {

  return (
    <>
      <Text>{'this is Login screen'}</Text>
      <TouchableOpacity
        onPress={() => {
            navigation.navigate('Home');
        }}>
        <Text>Goto Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Splash');
        }}>
        <Text>Goto Splash</Text>
      </TouchableOpacity>
    </>

  );
};

export default Login;
