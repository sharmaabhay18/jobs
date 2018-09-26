import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import _ from 'lodash';
import Slide from './components/Slide.js';

const SLIDE_SCREEN = [
  { text: 'Welcome to Job finding App', color: '#03A9F4' },
  { text: 'Use this App to get a job', color: 'grey' },
  { text: 'Set your location and start swiping away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onCompleteSlide = () => {
    this.props.navigation.navigate('auth');
  }

render() {
  if (_.isNull(this.state.token)) {
    return <AppLoading />;
  }
    return (
     <View style={{ flex: 1 }}>
        <Slide data={SLIDE_SCREEN} onComplete={this.onCompleteSlide} />
      </View>
    );
  }
}

export { WelcomeScreen };
