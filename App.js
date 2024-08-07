import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import CreateAccount from './Components/CreateAccount';
import CreateProfile from './Components/CreateProfile';
import ProfileScreen from './Components/profileScreen';
// import MatchScreen from './Components/MatchScreen'; // Import the MatchScreen component

function LogoTitleWhite() {
  return (
    <Image
      style={{ width: 90, height: 70, alignContent: "center" }}
      source={require('./assets/logoWhite.png')}
    />
  );
}

function LogoTitleMain() {
  return (
    <Image
      style={{ width: 90, height: 70, alignContent: "center" }}
      source={require('./assets/logoMain.png')}
    />
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CreateAccount" 
        component={CreateAccount} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CreateProfile" 
        component={CreateProfile} 
        options={{
          headerStyle: { backgroundColor: '#E66264' },
          headerTintColor: '#FFF',
          headerTitle: (props) => <LogoTitleWhite {...props} />, 
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen 
        name="ProfileTab" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          headerStyle: { backgroundColor: '#FFF' },
          headerTintColor: '#E66264',
          headerTitle: (props) => <LogoTitleMain {...props} />,
          headerTitleAlign: 'center',
        }} 
      />
      {/* <Tab.Screen 
        name="Match" 
        component={MatchScreen} 
        options={{ headerShown: false }} // Customize as needed
      /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
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
