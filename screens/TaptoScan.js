// import React from "react";
// import {Text,View, Button,StyleSheet} from 'react-native';


// // function Taptoscan(props)
// // {    
// //     // let data = route.params;
// //     return(
// //         <View>
            
// //             <Button  style={styles.button} title='tap to scan' onPress={props.navigation.replace('FrontScan')} ></Button>
            
// //         </View>
// //     );
// // }
// // export default Taptoscan;



import React from "react";
import {Text,View, Button,StyleSheet} from 'react-native';


// export default function Data({navigation})
// {    
//     // let data = route.params;
//     return(
//         <View>
//             <Text style={styles.text}>QR Code scanned data:</Text>
//             {/* <Text style={styles.text}>{data.data}</Text> */}
//             <Button   title='register device' onPress={navigation.navigate('TaptoScan')} ></Button>
            
//         </View>
//     );
// }




const TaptoScan = ({navigation}) => {
    

    return (
     
      
        <View >
        
        <Button title = 'Tap to scan ' onPress={()=>navigation.navigate('FrontScan')}/>

        </View>
        
     
    );
  };

  export default TaptoScan;
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