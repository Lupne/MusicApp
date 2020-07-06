import React,{useState} from 'react';
import {Animated,View,Text,Dimensions,ScrollView,StyleSheet} from 'react-native';
import Player from './audioplayer'
import Miniplayer from './miniplayer'

// Heights or Miniplayer and Audio player when minimized and when not minimized
const { height } = Dimensions.get("window");
const MINIMIZED_PLAYER_HEIGHT = 80;
const SNAP_TOP = 0;
const SNAP_BOTTOM = height - MINIMIZED_PLAYER_HEIGHT;
const config = {damping: 15,mass: 1,stiffness: 150,overshootClamping: false, restSpeedThreshold: 0.1, restDisplacementThreshold: 0.1};


class MusicModal extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      up:false,
    }
  }
  initial = new Animated.ValueXY({x:0,y:SNAP_BOTTOM})//Initializing the position of Player
 // function initiated when miniplayer is pressed to take it up
  upfunc = ()=>{
    this.setState({up:true})
   Animated.spring(this.initial, {
     speed:1000,
     bounciness:0,
     toValue: {x:0,y:SNAP_TOP},
     useNativeDriver:false,
   }).start()
  }
  //function initiated when the bigger player is pressed to take it down
  downfunc = ()=>{
    this.setState({up:false})
    Animated.spring(this.initial, {
      speed:1000,
      bounciness:0,
      toValue: {x:0,y:SNAP_BOTTOM},
      useNativeDriver:false,
    }).start()
  }
  render(){
    const TRACKS = [
      {
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      albumArtUrl: "https://images.squarespace-cdn.com/content/58ab2fce20099e7487a18b2a/1488423618745-3IDAU928ZPC21H89CEGN/Blurryface-twenty-one-pilots-cover-art.png?content-type=image%2Fpng",
      audioUrl: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3",},
      {
        title:'Radioactive',
        artist:'Imagine Dragons',
        albumArtUrl:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg',
        audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        title:"It's Time",
        artist:"Imagine Dragons",
        albumArtUrl:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ccdfced-e839-42d5-a415-5966da9a4e31/d9ifezp-c4a3ff51-a2bc-497b-a260-f7d8a8122cc7.png/v1/fill/w_900,h_900,q_80,strp/imagine_dragons___it_s_time_by_diyeah9tee4_d9ifezp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC85Y2NkZmNlZC1lODM5LTQyZDUtYTQxNS01OTY2ZGE5YTRlMzFcL2Q5aWZlenAtYzRhM2ZmNTEtYTJiYy00OTdiLWEyNjAtZjdkOGE4MTIyY2M3LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.j0EyPEo0sJMe7gpnYujNkFdQ8MSILXFAoMt_vGPVZwY',
        audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      },
    ]
    for(let i=0;i<TRACKS.length;i++){
      TRACKS[i].id = i; //Assigning ID to handle forward and backward button in Player
    }
  return (
   <View style={{flex: 1}}>
  <Animated.View style={[styles.mainplayer, this.initial.getLayout()]}><Player tracks={TRACKS} modalfunc={this.downfunc}/>
  </Animated.View>
  <View style={{opacity:this.state.up?0:1,position:'absolute',bottom:0,left:0,right:0,height:80}}>
  <Miniplayer ONPRESS={()=>this.upfunc()}/></View>
  </View>
  );
}
};

export default MusicModal

const styles = StyleSheet.create({
     mainplayer:{
      ...StyleSheet.absoluteFillObject,
    },
})
