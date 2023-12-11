
//React
import * as React from 'react';
//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import { HomeScreen } from './screens/Home';
import { MayorScreen } from './screens/soyMayor';
import { MenorScreen } from './screens/soyMenor';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="soyMayor" component={MayorScreen} options={{
          headerTintColor: 'white', headerTransparent: true, headerTitle: '',
        }}/>
        <Stack.Screen name="soyMenor" component={MenorScreen} options={{
          headerTintColor: 'white', headerTransparent: true, headerTitle: '',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
