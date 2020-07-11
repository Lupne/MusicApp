import React,{Component} from 'react';
import {Animated,View,Text,Dimensions,ScrollView,StyleSheet} from 'react-native';
import Playlist from './pages/playlist'
import PlaylistStack from './routes/playliststack'

//
class App extends React.Component{

  render(){
  return (
        <View style={{flex:1}}>
        <PlaylistStack />
        </View>
  );
}
};

export default App
