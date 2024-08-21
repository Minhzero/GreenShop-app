import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/Navigatior/TabNavigator';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import CartScreen from './src/screen/CartScreen';
import TodoScreen from './src/screen/TodoScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Register from './src/screen/register';
import Login from './src/screen/login';
import Dienthongtin from './src/screen/Dienthongtin';
import Search from './src/screen/Search';
import ProfileScreen from './src/screen/ProfileScreen';
import QAScreen from './src/screen/QAScreen';






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    
   
    
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name='Login'
          component={ProfileScreen}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen> */}
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
        
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>

        <Stack.Screen
          name='Tab'
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>

        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>

        <Stack.Screen
          name='Cart'
          component={CartScreen}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>

        <Stack.Screen
          name='dien'
          component={Dienthongtin}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
         <Stack.Screen
          name='search'
          component={Search}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})