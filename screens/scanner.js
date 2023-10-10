// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// export default function App(props) {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
// // const [type, setType] = useState(BarCodeScanner.Constants.Type.front);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//     console.log(data);
//     console.log("scanned data");
//     console.log(scanned);
    
//     // const { navigate } = this.props.navigation;
//     props.navigation.navigate('Nextpage');
   
      
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}/>
      
//       {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
//       {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() =>  navigation.navigate('Nextpage')} />} */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
// });
























import React, {useEffect, useState} from 'react';
import {Text, View,Button, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';

import BarcodeMask from 'react-native-barcode-mask';
import { Camera } from 'expo-camera';

const finderWidth = 280;
const finderHeight = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;



export default function BarCodeScanScreen({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);

    const [type, setType] = useState(Camera.Constants.Type.front);
    const [scanned, setScanned] = useState(false);

    console.log("type value");
    console.log("++++++++++++++++");
        console.log(type);
        console.log(scanned);
        console.log("++++++++++++++++");
        console.log(setScanned);
        


    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

      const handleBarCodeScanned = ({  data }) => {

    // if(setScanned==true){
    //   navigation.reset({
    //     setScanned: false
    //   });
    // };
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setScanned(true)
    console.log(data);
    console.log("scanned data");
    console.log(scanned);
    // props.navigation.push('RegisterdeviceData',{data:data});
    navigation.navigate('Resister');
   
      
  };


    if (hasPermission === null) {
              return <Text>Requesting for camera permission</Text>;
          }
          if (hasPermission === false) {
              return <Text>No access to camera</Text>;
          }
          return (

              <View style={{flex: 1}}>

                  <Camera 
                                  onBarCodeScanned={handleBarCodeScanned}
                                  type={type}
                                  barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                                  style={[StyleSheet.absoluteFillObject, styles.container]}>
                      <View
                          style={{
                              flex: 1,
                              backgroundColor: 'transparent',
                              flexDirection: 'row',
                          }}>
                          <TouchableOpacity
                              style={{
                                  flex: 1,
                                  alignItems: 'flex-end',
                              }}
                              onPress={() => {
                                  setType(
                                      type === Camera.Constants.Type.back
                                          ? Camera.Constants.Type.front
                                          : Camera.Constants.Type.back
                                  );
                              }}>
                              <Text style={{fontSize: 18, margin: 5, color: 'white'}}> Flip </Text>
                          </TouchableOpacity>
                      </View>
                      <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
                      {/* {scanned && <Button title="Scan Again" onPress={() => setScanned(false)}/>} */}
                  </Camera>
              </View>
          );
      }
    
      const styles = StyleSheet.create({

          container: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
          },
          title: {
              fontSize: 20,
              fontWeight: 'bold',
          },
          separator: {    
              marginVertical: 30,      
              height: 1,
              width: '80%',
    
          },
      });






























































