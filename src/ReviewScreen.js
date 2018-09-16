import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Screen',
    header: () => {
      return {
        right: <Text>Settings</Text>
      };
    }
  }

  render() {
    return (
     <View>
       <Text>ReviewScreen</Text>
       <Text>ReviewScreen</Text>
       <Text>ReviewScreen</Text>
       <Text>ReviewScreen</Text>
       <Text>ReviewScreen</Text>
       <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export {ReviewScreen};
