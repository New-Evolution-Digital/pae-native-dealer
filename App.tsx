import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import LandingPage from './screens/landing';
import Login from './screens/login';
import Onboarding from './screens/onboarding';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Landing' component={LandingPage} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Onboarding' component={Onboarding} />
        </Stack.Navigator>
        <StatusBar style='auto' />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const Stack = createNativeStackNavigator();
