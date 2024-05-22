import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {user}=useUser();
  return (  
    <View className = " items-center gap-1">
        <View className="flex flex-row mt-{-10px} ">
      <Image source = {{uri:user?.imageUrl}}
      className = "rounded-full w-12 h-12"
      />
      <View>
        <Text className="text-[16px]">Welcome</Text>
        <Text className="text-[20px] font-bold">{user?.fullName}</Text>
      </View>
      </View>
      
      {/* search part*/}

       <View className="p-2 px-5 bg-white mt-1 rounded-full ">
       <Ionicons name="search" size={24} color="black" />
         <TextInput placeholder='Search' />
       </View>
    </View>
  )
}