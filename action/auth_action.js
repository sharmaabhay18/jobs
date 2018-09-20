import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_LOGIN_SUCCESS,
         FACEBOOK_LOGIN_FAILED
         } from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      //Throw user directly to map screen.
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      //Throw user to FB login page
      doFacebookLogin(dispatch);
    }
  };

const doFacebookLogin = async dispatch => {
  //Facebook.logInWithReadPermissionsAsync
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('387071318496128', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAILED });
  }

 await AsyncStorage.setItem('fb_token', JSON.stringify(token));
 dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
