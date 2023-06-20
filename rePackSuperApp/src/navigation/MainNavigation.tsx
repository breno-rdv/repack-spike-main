import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RepackMiniAppScreen from '../screens/repack-mini-app/RepackMiniAppScreen';
const HomeComponent =
  process.env.COUNTRY === 'mx'
    ? React.lazy(
        () =>
          import(
            /* webpackChunkName: "mx_boundary" */ '../screens/mx-boundary/Home'
          ),
      )
    : React.lazy(
        () =>
          import(
            /* webpackChunkName: "ag_boundary" */ '../screens/ag-boundary/Home'
          ),
      );

const Home = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <HomeComponent />
    </React.Suspense>
  );
};

const Main = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Main.Navigator
      initialRouteName="RepackMiniAppScreen"
      screenOptions={{
        headerTitle: 'HostApp',
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'rgba(255,255,255,1)',
      }}>
      <Main.Screen name="RepackMiniAppScreen" component={RepackMiniAppScreen} />
      <Main.Screen name="SuperAppHome" component={Home} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(56, 30, 114, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigation;
