import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import CreateAccount from './Components/CreateAccount';
import CreateProfile from './Components/CreateProfile';

const Stack = createNativeStackNavigator();

function LogoTitleWhite() {
  return (
    <Image
      style={{ width: 90, height: 70, alignContent: "center" }}
      source={require('./assets/logoWhite.png')}
    />
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} options={{
           headerStyle: {
            backgroundColor: '#E66264',
          },
          headerTintColor: '#FFF',
          headerTitle: (props) => <LogoTitleWhite {...props} />, headerTitleAlign: 'center', 
        }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
