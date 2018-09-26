import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';
import Geocode from 'react-geocode';
import Swipe from './components/Swipe';

class DeckScreen extends Component {
   renderCard(job) {
    console.log('job', job.location);
     let latitude = null;
     let longitude = null;
    Geocode.fromAddress(job.location)
    .then((newLatLng) => {
     latitude = newLatLng.results[0].geometry.location.lat;
     longitude = newLatLng.results[0].geometry.location.lng;
    console.log(`${latitude}${longitude}`);
  }
).catch((error) => console.log(error));
    const initialRegion = {
      longitude: longitude ? longitude : -122,
      latitude: latitude ? latitude : 37,
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

renderNoMoreCards() {
  return (
    <Card title='No more jobs' />
  );
}
  render() {
    return (
     <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
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
    justifyContent: 'space-around'
  },
  descriptionStyle: {
    alignItems: 'center',
    marginTop: 10
  }
};

export default connect(mapStateToProps)(DeckScreen);
