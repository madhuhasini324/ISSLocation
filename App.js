import React, { Component } from 'react';
import 'react-native-gesture-handler';
import HomeScreen from "./screens/Home";
import IssLoacationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default class App extends Component {
    render() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
       }}
    >
    <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="IssLocation"
        component={IssLoacationScreen}
       />
      <Stack.Screen
        name="Meteor"
        component={MeteorScreen}
        />
         </Stack.Navigator>
    </NavigationContainer>
    
  );
    }
}

