import { View, Text ,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return (
    <View>
      <Image source={require('./../../assets/images/web.jpeg')} 
       className="w-full h-[400px] object-cover"
      />
      <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md">
        <Text className="text-[29px] font-black ">STUDENTS CONNECT</Text>
        <Text className="text-[15px] text-center">connect with high school students accross the world</Text>
        <TouchableOpacity onPress={onPress} className="p-3 bg-blue-500 rounded-full mt-20">
            <Text className="text-white text-center text-[18px]">GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}