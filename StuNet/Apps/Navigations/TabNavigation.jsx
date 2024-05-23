import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../Screens/ChatScreen';
import ConnectScreen from '../Screens/ConnectScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
import LearnScreen from '../Screens/LearnScreen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      /*tabBarActiveTintColor: 'black'*/
    }}>
        <Tab.Screen name='home' component={HomeScreen} 
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginButton:3}}>Home</Text>
          ),
           tabBarIcon:({color,size})=>(
            <FontAwesome name="home" size={size} color={color} />
           )
        }}
        />
        <Tab.Screen name='chat' component={ChatScreen}
         options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginButton:3}}>Chat</Text>
          ),
           tabBarIcon:({color,size})=>(
            <FontAwesome name="wechat" size={size} color={color} />
           )
        }} />
        <Tab.Screen name='connect' component={ConnectScreen} 
         options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginButton:3}}>Connect</Text>
          ),
           tabBarIcon:({color,size})=>(
            <FontAwesome name="compress" size={size} color={color} />
           )
        }}/>
        <Tab.Screen name='learn' component={LearnScreen} 
         options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginButton:3}}>Learn</Text>
          ),
           tabBarIcon:({color,size})=>(
            <FontAwesome name="book" size={size} color={color} />
           )
        }}/>
        <Tab.Screen name='profile' component={ProfileScreen} 
         options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginButton:3}}>Profile</Text>
          ),
           tabBarIcon:({color,size})=>(
            <FontAwesome name="user" size={size} color={color} />
           )
        }}/>
    </Tab.Navigator>
  )
}