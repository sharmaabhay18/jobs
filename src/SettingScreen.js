import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../action';

class SettingScreen extends Component {
  render() {
    return (
     <View style={{ marginTop: 25 }}>
      <Button
       title='Reset Liked Jobs'
       large
       backgroundColor='#F44336'
       onPress={this.props.clearLikedJob}
       icon={{ name: 'delete-forever' }}
      />
    </View>
    );
  }
}

export default connect(null, actions)(SettingScreen);
