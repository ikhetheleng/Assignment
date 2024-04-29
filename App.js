import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Screen from './pages/Screen';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Button } from 'react-native';

const Stack = createNativeStackNavigator();

//const setData = async ()=> {
  //const name = await AsyncStorage.setItem("name", JSON.stringify("Miss Koakoa"));
  
//}

//const showData =async()=>{
 // const name= await AsyncStorage.getItem("name");
  //console.log(name);
//}



const App = () => {
  return (
 // < View>
    //<Button onPress={setData} >setData</Button>
    //<Button onPress={showData} >showData</Button>
  //</View>
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


