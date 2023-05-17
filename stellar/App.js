import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from 'react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack'

import Home from "./screens/Home"
import DailyPic from "./screens/DailyPic"
import SpaceCraft from "./screens/SpaceCraft"
import StarMap from "./screens/StarMap"


const Stack = createstackNavigator();
function App (){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRoutename="Home" screenoptions={{
      headerShown:false
    }}/>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="DailyPic" component={DailyPic} />
    <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
    <Stack.Screen name="StarMap" component={StarMap} />
    </NavigationContainer>
    )
};

export default App;
