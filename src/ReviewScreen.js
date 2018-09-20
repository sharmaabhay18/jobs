import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
  return {
    title: 'Review Screen',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('setting')}
        backgroundColor='rgba(0, 0, 0, 0)'
        color='black'
      />
    )
  };
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

export { ReviewScreen };
