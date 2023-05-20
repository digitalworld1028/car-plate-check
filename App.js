/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Src/screen/Splash/index.js';

import Home from './Src/screen/Home/index.js'
import Register from './Src/screen/Register/index.js';
import Login from './Src/screen/Login/index.js';
// import Autocarousel from './Src/screen/Autocarousel/index.js';
import Addcar from './Src/screen/Add/Addcar.js';
import Addother from './Src/screen/Add/Addother.js';

import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Addcar" component={Addcar} />
        <Stack.Screen name="Addother" component={Addother} />
        {/* <Stack.Screen name="Autocarousel" component={Autocarousel} /> */}

      </Stack.Navigator>
      <Toast />
    </NavigationContainer>

  );
};

export default App;
