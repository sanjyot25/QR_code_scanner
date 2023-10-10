import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Login from './screens/login';
import Scanner from './screens/scanner';
import Register from './screens/RegisterDevice';
import TaptoScan from './screens/TaptoScan';
import FrontScan from './screens/FrontScan';
import FrontDataScan from './screens/FrontdataPass';


const stack = createStackNavigator();

function App(){
  return(
    <stack.Navigator>
      <stack.Screen name="Login" component={Login}/> 
      <stack.Screen name="Scanner" component={Scanner}/> 
      <stack.Screen name="Resister" component={Register}/> 
      <stack.Screen name="TaptoScan" component={TaptoScan}/> 
      <stack.Screen name="FrontScan" component={FrontScan}/> 
      <stack.Screen name="Result" component={FrontDataScan}/> 
      
      
    </stack.Navigator>
  );
}

export default () =>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}