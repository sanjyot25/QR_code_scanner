import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
// import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';





const Login = ({navigation}) => {

   const STORAGE_KEY = 'save_myusername'
  const [myusername, setUsername] = useState("")
  const [mypassword, setPassword] = useState("")
  const [mystatus, setstatus] = useState("")
//   const HOST = '192.168.69.178';192.168.69.178

// const fetchApi = async()=>{
//    try{
//       const res = await axios.get('http://localhost:8000/check_user');
//          console.log(res.data);
//    }catch(error){
//       console.log(error.message);
//    }
   
// }

// useEffect(()=>{
//    fetchApi()
// },[])


   //read data in async storage
  

  submitUserData = () =>{
   //  console.log(myusername, mypassword)
   //  fetch("192.168.69.178:8000/check_user",{
   //    method:"POST",
   //    headers: {
   //      'content-Type': 'application/json'
   //    },
   //    body:JSON.stringify({ 
   //      "username": myusername,
   //      "password": mypassword,
   //      "status": mystatus,
   //    })
   //  })
   //  .then((response) => {
   //    console.log(response);
   //    response.json().then((result)=>this.setState({ results: results }))
   //  })

   

  //  axios({
  //     method: 'post',
  //     url: 'http://192.168.69.178:8000/check_user',
  //     data: {
  //        'username': myusername,
  //           'password': mypassword,
  //           'status': mystatus
  //     } 
  //   });
  }

   const saveData = async (myusername) => {
      
   try {
      // const jsonValue = JSON.stringify(myusername,mypassword,mystatus)
     await AsyncStorage.setItem(STORAGE_KEY, myusername)
   //   alert(myusername)
     alert('data is stored successfully')

   } catch (e) {
     console.log(e)
   }
  
 }

 


  const onChangeText = myusername => setUsername(myusername)

 const onSubmitEditing = () => {
  if (!myusername) return

  saveData(myusername)
  setUsername('')
}
 
 const readData = async () => {

   try {
     const myusername = await AsyncStorage.getItem(STORAGE_KEY, myusername)
 
     if (myusername !== null) {
        setUsername(myusername)
        alert(myusername)
     }
   } catch (e) {
     alert('Failed to fetch the data from storage')
   }
 }

 useEffect(() => {
   readData()
 }, [])
 

   return (
      <View style = {styles.container}>
      <View>

      </View>
        <View style={styles.middle}>
         <Text style = {styles.text}>
            Login 
         </Text>

         <TextInput
        style={{

      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
          
        }}
        placeholder="Enter Username"
        value={myusername}
        // onChangeText={text => setUsername(text)}
        onChangeText={onChangeText}
       
      />

      <TextInput
        style={{ margin: 15,
          height: 40,
          borderColor: 'grey',
          borderWidth: 1}}
        placeholder="Enter Password"
        value={mypassword}
        onChangeText={text => setPassword(text)}
      />



 
<View style={{marginBottom: 20,}}>
<Button style={{  backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      marginBottom: 20,
      width:20,
      height: 40}} 
      
      title='Login' onPress={()=>navigation.navigate('Scanner')}/>
</View>
<View>

{/* <Button style={{  backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      marginBottom: 20,
      height: 40}} 
      
      title='Register' onPress={()=>navigation.navigate('Nextpage')}/> */}
      </View>
      </View>
      <View>

      </View>
      <View>
        
      </View>

      </View>
   )
}


export default Login


const styles = StyleSheet.create ({


    middle: {
    flex: 0.3,
    backgroundColor: "beige",
   
  }, 
  
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
    backgroundColor: "beige"
 
  

   },
   text: {
      color: '#41cdf4',
      textAlign:"center",
      fontSize:25,
      fontWeight:"bold"

      

   },
   capitalLetter: {
      color: 'red',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: '#37859b',
      fontStyle: 'italic'
   },
   textShadow: {
      textShadowColor: 'red',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   }
})













// import { View, Text,Button,TextInput } from 'react-native';
// import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';
// // import DeviceInfo from 'react-native-device-info';
// // import { getUniqueId, getManufacturer } from 'react-native-device-info';




// export default function Home(){
//     const navigation = useNavigation();
//     // const [deviceId,setDeviceId]=useState('click below to get unique id');

//     // const getDeviceId=()=>{
//     //     var uniqueID= DeviceInfo.getUniqueId();
//     //     setDeviceId(uniqueID);
//     // }

//     const [myusername, setUsername] = useState("")
//   const [mypassword, setPassword] = useState("")
//   // const [deviceId, setdeviceID] = useState("")

//   submitUserData = () =>{
//     // console.log(myusername, mypassword)
//     fetch("http://localhost:8000",{
//       method:"POST",
//       headers: {
//         'content-Type': 'application/json'
//       },
//       body:JSON.stringify({ 
//         "username": myusername,
//         "password": mypassword,
//         // "status": mystatus,
//       })
//     })
//     .then((response) => {
//       console.log(response);
//       response.json().then((result)=>this.setState({ results: results }))
//     })


//    //  .then(res=>res.json())
//    //  .then(data=>{
//    //    console.log(data)
//    //    alert("successfully Added data")
//    //  })
//   }
//   // console.log(submitUserData)

//     return(

//         <View >
//              {/* <TextInput  
//             // style={styles.inputText}
//             placeholder="Email..." 
//             placeholderTextColor="#003f5c"
//             /> */}
//                <TextInput
//         style={{height: 40}}
//         placeholder="Enter Username"
//         value={myusername}
//         onChangeText={text => setUsername(text)}
//       />
// {/* 
//               <TextInput  
//             // style={styles.inputText}
//             placeholder="Password" 
//             placeholderTextColor="#003f5c"
//            /> */}
//               <TextInput
//         style={{height: 40}}
//         placeholder="Enter Password"
//         value={mypassword}
//         onChangeText={text => setPassword(text)}
//       />

//         {/* <TextInput
//                 style={{height: 40}}
//                 placeholder="Enter DeviceID"
//                 value={deviceId}
//                 onChangeText={text => setdeviceID(text)}
//             /> */}


//            {/* <Text style={{color:'black'}}>
//                {deviceId}
//            </Text> */}
//             <Button title='Login' onPress={()=>navigation.navigate('Scanner')}/>
//             <Button title='get Info' onPress={this.submitUserData(console.log(submitUserData))}/>
            
//         </View>
//     )
// }

// // const styles = Stylesheet.create({
// //     container:{
// //         flex:1,
// //         backgroundColor:'#fff',
// //         alignItems:'center',
// //         justifyContent:'center'
// //     }
// // })
