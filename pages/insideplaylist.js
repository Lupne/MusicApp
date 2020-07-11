import React,{Component} from 'react'
import {View,FlatList,StyleSheet,Modal,TouchableOpacity,Image} from 'react-native'
import MusicModal from './musicmodal'
import {  Text, Button,TextInput   } from 'react-native-paper';

class InsidePlaylist extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
      <View style={{marginTop:20}}>
      <FlatList data={this.props.navigation.getParam('songs')} renderItem={({item})=>{
        return(
          <View style={{paddingVertical:10,marginVertical:2,flexDirection:'row'}}>
          <Image source={{uri:item.albumArtUrl}} style={{height:90,width:80}} />
          <View style={{marginLeft:25,marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{item.title}</Text>
          <Text style={{fontSize:14,color:'white',marginTop:5,fontStyle:'italic'}}>By {item.artist}</Text>
          </View>
          </View>
        )
      }}/>
      </View>
     </View>
)}
}

export default InsidePlaylist
