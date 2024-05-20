import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../Screens/ChatScreen';
import PostScreen from '../Screens/PostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='home' component={HomeScreen} />
        <Tab.Screen name='chat' component={ChatScreen} />
        <Tab.Screen name='post' component={PostScreen} />
        <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}