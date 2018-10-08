import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, Icon } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
  return {
    
    title: 'Review Jobs',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='description' size={30} color={tintColor} />;
      },
    headerTitleStyle: { alignSelf: 'center' },
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

renderLikedJobs() {
  return this.props.likedJobs.map(job => {
    console.log(job);
    return (
      <Card title={job.title} key={job.id}>
       <View style={{ height: 225 }}>
       <View style={{ flex: 1 }}>
       <Image
         style={{ height: 160, width: null, resizeMode: 'contain' }}
         source={{ uri: job.company_logo }}
       />
       </View>
         <View style={styles.reviewContainer}>
           <Text>{job.company}</Text>
           <Text>{job.type}</Text>
         </View>
       </View>
       <Button
        title='Apply Now!'
        backgroundColor='#03A9F4'
        onPress={() => Linking.openURL(job.url)}
       />
      </Card>
    );
  });
}

  render() {
    return (
     <ScrollView style={{ marginBottom: 25 }}>
      {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  reviewContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
