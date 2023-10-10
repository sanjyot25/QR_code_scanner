// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';


// function goBack(props){

//     <Button title='return' onPress={props.navigation.goBack()}></Button>

// }

// function ProfileScreen({ props }) {
//     return (
//       <View>
//         <Button onPress={() => props.navigation.pop()} />
//       </View>
//     );
//   }




function Result({route,navigation})
{    
    let data = route.params;
    return(
        <View>
            <Text style={styles.text}>QR Code scanned data:</Text>
            <Text style={styles.text}>{data.data}</Text>
            <Button  style={styles.button} title='return' ></Button>
            
        </View>
    );
}
export default Result;

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  });