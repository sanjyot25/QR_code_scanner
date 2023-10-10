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




const DataPass = ({navigation}) => {
    

    return (
     
      
        <View >
        
        <Button title = 'Register device ' onPress={()=>navigation.navigate('TaptoScan')}/>

        </View>
        
     
    );
  };

  export default  DataPass;
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