import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../action';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='my-location' size={30} color={tintColor} />;
      }
  }

  state = {
    mapLoad: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoad: true });
  }

  onRegionChangeComplete = (region) => {
    console.log(region);
    this.setState({ region });
  }

  onPressButtton = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
  }

  render() {
    if (!this.state.mapLoad) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
        </View>
      );
    }

    return (
     <View style={{ flex: 1 }}>
        <MapView
         style={{ flex: 1 }}
         region={this.state.region}
         onRegionChangeComplete={this.onRegionChangeComplete}
         showsCompass
        />
        <View style={style.buttonContainer}>
         <Button
           large
           title='Search This Area'
           backgroundColor='#009688'
           icon={{ name: 'search' }}
           onPress={this.onPressButtton}
         />
        </View>
      </View>
    );
  }
}

const style = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
};

export default connect(null, actions)(MapScreen);
