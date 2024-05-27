import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen for Junior High School
function JHSScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Junior High School Content</Text>
    </View>
  );
}

// Screen for Senior High School
function SHSScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Senior High School Content</Text>
    </View>
  );
}

// Learn Tab screen
function LearnTabScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to JHS"
        onPress={() => navigation.navigate('JHS')}
      />
      <Button
        title="Go to SHS"
        onPress={() => navigation.navigate('SHS')}
      />
    </View>
  );
}

// Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LearnTab">
        <Stack.Screen name="LearnTab" component={LearnTabScreen} options={{ title: 'Learn' }}/>
        <Stack.Screen name="JHS" component={JHSScreen} options={{ title: 'Junior High School' }}/>
        <Stack.Screen name="SHS" component={SHSScreen} options={{ title: 'Senior High School' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
