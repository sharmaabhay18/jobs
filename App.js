import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Button, Card, Icon } from 'react-native-elements';
import configureStore from './store';
import {
  WelcomeScreen
} from './src';
import AuthScreen from './src/AuthScreen';
import MapScreen from './src/MapScreen';
import DeckScreen from './src/DeckScreen';
import ReviewScreen from './src/ReviewScreen';
import SettingScreen from './src/SettingScreen';

const { persistor, store } = configureStore();

export default class App extends Component {
  render() {
    const MainNavigation = createBottomTabNavigator({
      // welcome: { screen: WelcomeScreen },
      // auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: ReviewScreen,
              setting: SettingScreen
            }),
            navigationOptions: () => ({
                title: 'Review Jobs',
                tabBarIcon: ({ tintColor }) => {
                    return <Icon name='favorite' size={30} color={tintColor} />;
              }
            })
          }
        }, {
          tabBarOptions: {
            showIcon: true,
           showLabel: true,
           labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      }
    });
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MainNavigation />
      </PersistGate>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
