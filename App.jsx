import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/routes/tabNavigators';
import {Provider} from 'react-redux';
import store from './src/store';
import StackNavigator from './src/routes/stackNavigator';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StackNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
}
