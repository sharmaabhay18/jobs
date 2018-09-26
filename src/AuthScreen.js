import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import * as actions from '../action';

class AuthScreen extends Component {

  componentDidMount() {
  console.log(this.props);

   this.onAuthComplete(this.props);
  }

 componentWillReceiveProps(nextProps) {
   console.log(nextProps);
  this.onAuthComplete(nextProps);
 }

onAuthComplete(props) {
   if (props.token) {
     this.props.navigation.navigate('map');
   }
}

  render() {
    return (
     <View style={style.authView}>
       <Button
         icon={{ name: 'facebook-f', type: 'font-awesome' }}
         title='Login with Facebook'
         onPress={() => this.props.facebookLogin()}
         backgroundColor='#3B5998'
       />
      </View>
    );
  }
}

const style = {
  authView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}

export default connect(mapStateToProps, actions)(AuthScreen);
