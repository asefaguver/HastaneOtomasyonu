//import * as React from 'react';
import React, {useState} from 'react';

//import { Text, View,TouchableOpacity,Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './src/Pages/HomeScreen';
import SettingsScreen from './src/Pages/SettingsScreen';
import Login from './src/Pages/Login';
import Signin from './src/Pages/Signin';
import Welcome from './src/Pages/Welcome';




const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function myStacks(){
  return (
    <stack.Navigator>      
      <stack.Screen name="WelcomePage" component={Welcome}></stack.Screen>
      <stack.Screen name="LoginPage" component={Login}></stack.Screen>
      <stack.Screen name="SigninPage" component={Signin}></stack.Screen>
    </stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({size, color}) => (<Ionicons name={"home"} color={"blue"} size={28} />)
                }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
                    tabBarIcon: ({size, color}) => (<Ionicons name={"settings-sharp"} color={"blue"} size={28} />)
                }} />
      <Tab.Screen name="Welcome" component={myStacks} options={{
                    tabBarIcon: ({size, color}) => (<Ionicons name={"arrow-down-circle"} color={"blue"} size={28} />)
                }} />
    </Tab.Navigator>
  );
}

function MyDrawer(){
  return (
  <Drawer.Navigator>
    <Drawer.Screen name="Deneme" component={MyTabs}></Drawer.Screen>          
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />      
    </NavigationContainer>    
  );
}


