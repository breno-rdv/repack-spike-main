/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import ErrorBoundary from './src/shared/ErrorBoundary';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ErrorBoundary>
  );
}

export default App;
