import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import {
  WelcomeScreen,
  MapScreen,
  DeckScreen,
  ReviewScreen,
  SettingScreen
} from './src';
import AuthScreen from './src/AuthScreen';

export default class App extends Component {
  render() {
    const MainNavigation = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: {
                screen: ReviewScreen
               },
              setting: { screen: SettingScreen }
            })
          }
        })
      }
    });
    return (
      <Provider store={store}>
      <MainNavigation />
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
