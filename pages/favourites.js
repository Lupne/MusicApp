import React,{Component} from 'react'
import {View,FlatList,StyleSheet,Modal,TouchableOpacity,Image} from 'react-native'
import {  Text, Button,TextInput   } from 'react-native-paper';
import {  Menu, Divider, Provider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

class InsidePlaylist extends Component{
  constructor(props) {
    super(props)
  this.state={
    songs:[]
  }
}
componentDidMount(){
  this.setState({songs:this.props.navigation.getParam('songs')})
}
/* function to delete songs*/
  delete = (id)=>{
    let songs_cur = this.state.songs;
    let final_songs = []
    for(let i=0;i<songs_cur.length;i++){
      if(songs_cur[i].id != id)
      final_songs.push(songs_cur[i])
    }
    this.setState({songs:final_songs})
  }
 /* function to add songs to favourite*/
 favourite = (id)=>{
        //backend request to add a song to favouties
 }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
      <View style={{marginTop:20}}>
      <FlatList data={this.state.songs} renderItem={({item})=>{
        return(
          <View style={{paddingVertical:10,marginVertical:2,flexDirection:'row'}}>
          <Image source={{uri:item.albumArtUrl}} style={{height:90,width:80}} />
          <View style={{marginLeft:25,marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{item.title}</Text>
          <Text style={{fontSize:14,color:'white',marginTop:5,fontStyle:'italic'}}>By {item.artist}</Text>
          </View>
          <View style={{right:10,marginTop:35,position:'absolute'}}>
                   <AntDesign name = 'delete' color='white' size={30} onPress={()=>this.delete(item.id)}/>
          </View>
          </View>
        )
      }}/>
      </View>
     </View>
)}
}

export default InsidePlaylist
