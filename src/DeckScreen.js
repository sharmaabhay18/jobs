import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import Geocode from 'react-geocode';
import Swipe from './components/Swipe';
import * as actions from '../action';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='description' size={30} color={tintColor} />;
      }
  }

   renderCard(job) {
    console.log('job', job.location);
     let latitude = null;
     let longitude = null;
//     Geocode.fromAddress(job.location)
//     .then((newLatLng) => {
//      latitude = newLatLng.results[0].geometry.location.lat;
//      longitude = newLatLng.results[0].geometry.location.lng;
//     console.log(`${latitude}${longitude}`);
//   }
// ).catch((error) => console.log(error));
    const initialRegion = {
      longitude: -122,
      latitude: 37,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card title={job.title}>
      <View style={{ height: 300 }}>
       <MapView
        initialRegion={initialRegion}
        cacheEnabled={true}
        scrollEnabled={true}
        style={{ flex: 1 }}
       >
       </MapView>
      </View>
       <View style={style.wrapperTitle}>
        <Text>{job.company}</Text>
        <Text>{job.type}</Text>
      </View>
      <View style={style.descriptionStyle}>
       <Text>{job.location}</Text>
      </View>
    </Card>
  );
  }

renderNoMoreCards = () => {
  return (
    <Card title='No More Jobs'>
    <Button
     title='Back To Map'
     large
     icon={{ name: 'my-location' }}
     backgroundColor='#03A9F4'
     onPress={() => this.props.navigation.navigate('map')}
    />
    </Card>
  );
}
  render() {
    return (
     <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs };
}

const style = {
  wrapperTitle: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
    marginTop: 10
  },
  descriptionStyle: {
    alignItems: 'center',
    marginTop: 10
  }
};

export default connect(mapStateToProps, actions)(DeckScreen);
