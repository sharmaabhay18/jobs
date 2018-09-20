import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slide from './components/Slide.js';

const SLIDE_SCREEN = [
  { text: 'Welcome to Job finding App', color: '#03A9F4' },
  { text: 'Use this App to get a job', color: 'grey' },
  { text: 'Set your location and start swiping away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

  onCompleteSlide = () => {
    this.props.navigation.navigate('auth');
  }

render() {
    return (
     <View style={{ flex: 1 }}>
        <Slide data={SLIDE_SCREEN} onComplete={this.onCompleteSlide} />
      </View>
    );
  }
}

export { WelcomeScreen };
