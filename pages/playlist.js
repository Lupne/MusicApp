import React,{Component} from 'react'
import {View,FlatList,StyleSheet,Modal,TouchableOpacity,Image} from 'react-native'
import MusicModal from './musicmodal'
import {  Text, Button,TextInput   } from 'react-native-paper';


// erorr handling for empty playlist name not done


class Playlist extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible:false,
      name:'',
      playlist:[{name:'Ariana',creator:'naman',id:'1',uri:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg'},{name:'Kendrick',id:'2',creator:'naman',uri:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg'}]
    }
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
      {/*Modal that appears when you click on create button*/}
      <Modal visible={this.state.visible} onDismiss={()=>this.setState({visible:false})} style={{backgroundColor:'pink',height:200}}>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'grey',height:'100%',width:'100%',elevation:10}}>
        <View style={{marginTop:'60%',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20}}>Playlist Name</Text>
        {/* Text input for playlist name*/}
        <TextInput flat style={{backgroundColor:'transparent',width:'80%'}} underlineColor='white' value={this.state.name} onChangeText={(text)=>this.setState({name:text})} />
        <View style={{flexDirection:'row',marginTop:40}}>
        {/*Cancel and Submit Button in Modal*/}
        <TouchableOpacity onPress={()=>this.setState({visible:false})}><Text style={{fontWeight:'bold',fontSize:20}}>Cancel</Text></TouchableOpacity>
        <View style={{marginHorizontal:20}}></View>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20}}>Submit</Text></TouchableOpacity>
        {/*Cancel and Submit Button end*/}
        </View>
        </View>
        </View>
        </View>
      </Modal>
      <View style={{alignItems:'center',marginTop:'12%'}}>
      {/* Create Button for creating playlist */}
      <Button style={{width:150,height:60,alignItems:'center',justifyContent:'center',borderRadius:80,backgroundColor:'grey'}}
       mode="contained"
       onPress={() => {this.setState({visible:true})}}>Create</Button>
       </View>
      {/*Flatlist for Outputting Playlists*/}
      <FlatList data={this.state.playlist} renderItem={({item}) => {
        return(
          {/* On Press we navigate into Inside playlist*/}
            <TouchableOpacity onPress={()=>console.log('hi')}>
          <View style={{paddingVertical:10,marginVertical:2,flexDirection:'row'}}>
          <Image source={{uri:item.uri}} style={{height:90,width:80}} />
          <View style={{marginLeft:25,marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{item.name}</Text>
          <Text style={{fontSize:14,color:'white',marginTop:5,fontStyle:'italic'}}>By {item.creator}</Text>
          </View>
          </View>
          </TouchableOpacity>
        )
      }} />
      {/*FlatList ended */}
      </View>
    )
  }
}

export default Playlist

const styles = StyleSheet.create({
 modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
})
