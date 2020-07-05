import React,{Component} from 'react';
import {Animated,View,Text,Dimensions,ScrollView,StyleSheet} from 'react-native';
import MusicModal from './pages/musicmodal'
import Miniplayer from './pages/miniplayer'

const { height } = Dimensions.get("window");
const MINIMIZED_PLAYER_HEIGHT = 80;
const SNAP_TOP = 0;
const SNAP_BOTTOM = height - MINIMIZED_PLAYER_HEIGHT;
const config = {damping: 15,mass: 1,stiffness: 150,overshootClamping: false, restSpeedThreshold: 0.1, restDisplacementThreshold: 0.1};

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      up:false,
    }
  }
  initial = new Animated.ValueXY({x:0,y:SNAP_BOTTOM})
  upfunc = ()=>{
    this.setState({up:true})
   Animated.spring(this.initial, {
     toValue: {x:0,y:SNAP_TOP},
     useNativeDriver:false,
   }).start()
  }
  downfunc = ()=>{
    this.setState({up:false})
    Animated.spring(this.initial, {
      toValue: {x:0,y:SNAP_BOTTOM},
      useNativeDriver:false,
    }).start()
  }
  render(){
  return (
   <View style={{flex: 1}}>
  <Animated.View style={[styles.mainplayer, this.initial.getLayout()]}>
  <MusicModal modalfunc = {this.downfunc}/>
  </Animated.View>
  <View style={{opacity:this.state.up?0:1,position:'absolute',bottom:0,left:0,right:0,height:80}}>
  <Miniplayer ONPRESS={()=>this.upfunc()}/></View>
  </View>
  );
}
};

export default App

const styles = StyleSheet.create({
     mainplayer:{
      ...StyleSheet.absoluteFillObject,
    },
})
