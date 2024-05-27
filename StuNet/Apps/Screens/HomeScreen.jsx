import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import FloatingButton from '../Components/HomeScreen/FloatingButton'

export default function HomeScreen() {
  return (
    <View className="py-8 px-6" >
      <Header/>
      <FloatingButton />
    </View>
  )
}
