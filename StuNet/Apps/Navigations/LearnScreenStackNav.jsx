import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LearnScreen from '../Screens/LearnScreen';

const Stack = createStackNavigator();

export default function LearnScreenStackNav() {
  return (
   <Stack.Navigator>
         <Stack.Screen name='learn' component={LearnScreen} />
   </Stack.Navigator>
  )
}