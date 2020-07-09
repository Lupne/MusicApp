import React,{Component} from 'react';
import {Animated,View,Text,Dimensions,ScrollView,StyleSheet} from 'react-native';
import MusicModal from './pages/musicmodal'
import Miniplayer from './pages/miniplayer'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

//
class App extends React.Component{
  state = {
    userInfo:null,
  }
  componentDidMount(){
    GoogleSignin.configure({
    webClientId: '539991633572-ktm5gpugbectrot4ic605qtuplbtnb0j.apps.googleusercontent.com', // From Firebase Console Settings
});
  }
  signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('SIGNIN')
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    console.log("SIGNOUT")
    this.setState({userInfo:null})
  } catch (error) {
    console.error(error);
  }
};
  render(){
  return (
        <View style={{flex:1}}>
        <MusicModal />
        </View>
  );
}
};

export default App
