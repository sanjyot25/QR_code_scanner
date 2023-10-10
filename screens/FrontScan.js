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



export default function BarCodeScanScreen1(props) {

    const [hasPermission, setHasPermission] = useState(null);
    const [Front, setFront] = useState(Camera.Constants.Type.front);
    const [scanned, setScanned] = useState(false);
    const data ={data}
    console.log("type value front");
    console.log("************");
        console.log(Front);
        // console.log(type);
        console.log("****************");

        console.log(scanned)

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

      const handleBarCodeScanned =  ({data})  => {
          
       
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(data);
   
    // navigation.navigate('Nextpage', { data: data, })
    // const { navigate } = this.props.navigation;
    props.navigation.push('Result',{data: data});
    // const { navigate } = props.navigation;
    // navigate('Logged1', {data: data,})
   
      
  };

//   _handleBarCodeRead = data => {

//     // Alert.alert(
//     //   'Scan successful!',
//     //   JSON.stringify(data)
//     // );
//     const { navigate } = this.props.navigation;
//     navigate('Logged1', {data: data})
//     };

    // const handleBarCodeScanned = () => {
    //     if (!scanned) {
    //         const {type, data, bounds: {origin} = {}} = scanningResult;
    //         // @ts-ignore
    //         // const {x, y} = origin;
    //         if (setScanned(true)) {
                
    //             alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    //         }
    //     }
    // };

    if (hasPermission === null) {
              return <Text>Requesting for camera permission</Text>;
          }
          if (hasPermission === false) {
              return <Text>No access to camera</Text>;
          }
          return (

              <View style={{flex: 1}}>
                  {/* <Button title='scan' onPress={BarCodeScanner}/> */}
                  <Camera onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                  type={Front}
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
                                setFront(
                                      Front === Camera.Constants.Type.back
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