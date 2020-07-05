import React,{Component} from 'react'
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import Video from 'react-native-video';
import AlbumArt from './albumart'
import TrackDetails from './trackdetails'
import SeekBar from './seekbar'
import Controls from './controls'
import Rating from './rating'

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
    };
  }
 /*getting duration of the audio*/
  setDuration(data) {
    this.setState({totalLength: Math.floor(data.duration)})
  }

  setTime(data) {
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }
/* Function when forward button is Pressed */
onForward = ()=>{
  let len = this.props.tracks.length;
  this.setState({selectedTrack:(this.state.selectedTrack+1)%len,currentPosition:0})
}
/* Function when backward button is Pressed */
onBack = ()=>{
  let new_track = this.state.selectedTrack - 1;
  if(new_track<0){
    new_track = this.props.tracks.length - 1;
  }
  this.setState({selectedTrack:new_track,currentPosition:0})
}
  render() {
    const track = this.props.tracks[this.state.selectedTrack];
    const video = (
      <Video source={{uri: track.audioUrl}} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused}               // Pauses playback entirely.
        onLoad={(data)=>{this.setDuration(data)}}    // Callback when video loads
        onProgress={(data)=>{this.setTime(data)}}    // Callback every ~250ms with currentTime
        />
    );

    return (
      <View style={{backgroundColor:'black',height:'100%'}}>
      {video}
      <TouchableWithoutFeedback onPress={this.props.modalfunc}>
      <View style={{marginTop:'30%'}}>
        <AlbumArt url={track.albumArtUrl}/>
      </View>
      </TouchableWithoutFeedback>
        <View style={{marginTop:'7%'}}>
        <Rating />
        <TrackDetails title={track.title} artist={track.artist} />
        <SeekBar onSeek={(data)=>{this.seek(data)}} trackLength={this.state.totalLength} onSlidingStart={() => this.setState({paused: true})} currentPosition={this.state.currentPosition} />
        <Controls onPressPlay={() => this.setState({paused: false})} onPressPause={() => this.setState({paused: true})} paused={this.state.paused} onForward={()=>this.onForward()} onBack={()=>this.onBack()}/>
          </View>
      </View>
    );
  }
}
