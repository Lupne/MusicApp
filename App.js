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
    GoogleSignin.configure();
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
    const google = this.state.userInfo?(<GoogleSigninButton
style={{ width: 192, height: 48 }}
size={GoogleSigninButton.Size.Wide}
color={GoogleSigninButton.Color.Dark}
onPress={this.signOut} />):(<GoogleSigninButton
style={{ width: 192, height: 48 }}
size={GoogleSigninButton.Size.Wide}
color={GoogleSigninButton.Color.Dark}
onPress={this.signIn} />)
  return (
    <View style={{alignItems:'center',justifyContent:'center',marginTop:'50%'}}>
          <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")}/>
            {google}
        </View>
  );
}
};

export default App
