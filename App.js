import React,{Component} from 'react';
import {Animated,View,Text,Dimensions,ScrollView,StyleSheet} from 'react-native';
import MusicModal from './pages/musicmodal'
import Miniplayer from './pages/miniplayer'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

//
class App extends React.Component{

  render(){
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
        </View>
  );
}
};

export default App
