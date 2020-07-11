import React,{Component} from 'react';
import {Animated,View,Text,Dimensions,ScrollView,StyleSheet} from 'react-native';
import Playlist from './pages/playlist'

//
class App extends React.Component{

  render(){
  return (
        <View style={{flex:1}}>
        <Playlist />
        </View>
  );
}
};

export default App
