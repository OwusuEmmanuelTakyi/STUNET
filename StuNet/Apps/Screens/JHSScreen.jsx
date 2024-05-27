import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen for a specific subject in Junior High School
function SubjectScreen({ route }) {
  // You receive the subject name via route params
  return (
    <View style={styles.container}>
      <Text style={styles.subjectTitle}>Welcome to the {route.params.subject} section</Text>
      <Text>Content for {route.params.subject} will be added here.</Text>
    </View>
  );
}

// Screen for Junior High School
function JHSScreen({ navigation }) {
  const subjects = [
    "Mathematics", "English Language", "Integrated Science", 
    "Social Studies", "French", "ICT", "Religious and Moral Education"
  ];

  return (
    <ScrollView style={styles.container}>
      {subjects.map((subject, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('Subject', { subject })}
        >
          <Text style={styles.buttonText}>{subject}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// Learn Tab screen
function LearnTabScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JHS')}
      >
        <Text style={styles.buttonText}>Go to JHS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SHS')}
      >
        <Text style={styles.buttonText}>Go to SHS</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LearnTab" component={LearnTabScreen} options={{ title: 'Learn' }}/>
        <Stack.Screen name="JHS" component={JHSScreen} options={{ title: 'Junior High School' }}/>
        <Stack.Screen name="SHS" component={SHSScreen} options={{ title: 'Senior High School' }}/>
        <Stack.Screen name="Subject" component={SubjectScreen} options={({ route }) => ({ title: route.params.subject })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  subjectTitle: {
    fontSize: 20,
    marginBottom: 20
  }
});

export default App;
