import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import CustomIcon from '../components/CustomIcon';
import HistoryScreen from '../screen/HistoryScreen';
import CartScreen from '../screen/CartScreen';
import QAScreen from '../screen/QAScreen';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screen/ProfileScreen';



const Tabs = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
        )

      }}
    >

      <Tabs.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <CustomIcon name='home' size={25} color={
            //   focused ? "#D17842" : "#52555A"
            // }
            // />
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen name='Profile' component={ProfileScreen}
      options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'user'} size={size} color={focused ? "red" : "#52555A"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen name='history' component={HistoryScreen}
      options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'history'} size={size} color={focused ? "#800080" : "#52555A"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen name='QA' component={QAScreen}
      options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={'question-circle'} size={size} color={focused ? "#D17842" : "#52555A"} />

          ),
        }}
      ></Tabs.Screen>

    </Tabs.Navigator>
  )
}


const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'rgba(12,15,20,0.5)',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'


  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})

export default TabNavigator;
