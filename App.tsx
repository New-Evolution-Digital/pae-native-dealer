import * as React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme, Box } from 'native-base';
import LandingPage from './screens/landing';
import Login from './screens/login';
import Onboarding from './screens/onboarding';
import Profile from './screens/profile';
import Landing from './screens/landing';
import CRM from './screens/crm';
import Inventory from './screens/inventory';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStore } from 'redux';
import navReducer from './reducers/navReducer';

const store = createStore(navReducer);
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Profile' component={Profile} />
            <Drawer.Screen name='Leads' component={CRM} />
            <Drawer.Screen name='Inventory' component={Inventory} />
            <Drawer.Screen
              name='Login'
              component={Login}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
            <Drawer.Screen
              name='Home'
              component={Landing}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
            <Drawer.Screen
              name='Onboarding'
              component={Onboarding}
              options={{
                drawerItemStyle: { height: 0 },
              }}
            />
          </Drawer.Navigator>
          <StatusBar style='auto' />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const Stack = createNativeStackNavigator();
