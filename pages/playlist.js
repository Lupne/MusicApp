import React,{Component} from 'react'
import {View,FlatList,StyleSheet,Modal,TouchableOpacity,Image} from 'react-native'
import MusicModal from './musicmodal'
import {  Text, Button,TextInput   } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

class Playlist extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible:false,
      name:'',
      favo:{songs:[ {
          liked:false,
          title:'Radioactive',
          artist:'Imagine Dragons',
          albumArtUrl:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg',
          audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",id:'2',
        }]},
      playlist:[{name:'Ariana',creator:'naman',id:'1',uri:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg',
      songs: [
        {
        liked:false,
        title: 'Stressed Out',
        artist: 'Twenty One Pilots',
        albumArtUrl: "https://images.squarespace-cdn.com/content/58ab2fce20099e7487a18b2a/1488423618745-3IDAU928ZPC21H89CEGN/Blurryface-twenty-one-pilots-cover-art.png?content-type=image%2Fpng",
        audioUrl: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3",id:'1'},
        {
          liked:false,
          title:'Radioactive',
          artist:'Imagine Dragons',
          albumArtUrl:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg',
          audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",id:'2'
        },
        {
          liked:true,
          title:"It's Time",
          artist:"Imagine Dragons",
          albumArtUrl:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ccdfced-e839-42d5-a415-5966da9a4e31/d9ifezp-c4a3ff51-a2bc-497b-a260-f7d8a8122cc7.png/v1/fill/w_900,h_900,q_80,strp/imagine_dragons___it_s_time_by_diyeah9tee4_d9ifezp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC85Y2NkZmNlZC1lODM5LTQyZDUtYTQxNS01OTY2ZGE5YTRlMzFcL2Q5aWZlenAtYzRhM2ZmNTEtYTJiYy00OTdiLWEyNjAtZjdkOGE4MTIyY2M3LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.j0EyPEo0sJMe7gpnYujNkFdQ8MSILXFAoMt_vGPVZwY',
          audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",id:'3'
        },
      ]
     },{name:'Kendrick',id:'2',creator:'naman',uri:'https://upload.wikimedia.org/wikipedia/en/3/3f/Night_Visions_Album_Cover.jpeg'}]
    }
  }
  /*function to create a playlist*/
  createplaylist = ()=>{
    if(this.state.name.length===0){
        this.setState({name:'Playlist#'+(this.state.playlist.length+1).toString()},()=>{
          const next={name:this.state.name,songs:[],creator:'usernamehere',id:this.state.playlist.length+1}
          this.setState({visible:false})
          this.setState({playlist:[...this.state.playlist,next]})
          this.setState({name:''})
        })}
    else{
        this.setState({visible:false});
        const next={name:this.state.name,songs:[],creator:'usernamehere',id:this.state.playlist.length+1}
        this.setState({playlist:[...this.state.playlist,next]})
        this.setState({name:''})
      }
  }
  /*function to delete a playlist*/
  deletePlaylist = (id)=>{
    let newplay = this.state.playlist;
    let final = [];
    for(let i=0;i<newplay.length;i++){
      if(newplay[i].id!=id){
        final.push(newplay[i])
      }
    }
    this.setState({playlist:final})
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
        <TouchableOpacity onPress={()=>{this.createplaylist()}}><Text style={{fontWeight:'bold',fontSize:20}}>Submit</Text></TouchableOpacity>
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
       {/*GO to FAVOURITES*/}
       <View style={{height:80}}><TouchableOpacity onPress={()=>this.props.navigation.navigate('Favourites',this.state.favo)}><Text style={{backgroundColor:'white'}}>Favourites</Text></TouchableOpacity></View>
      {/*Flatlist for Outputting Playlists*/}
      <FlatList data={this.state.playlist} renderItem={({item}) => {
        return(
          <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('InsidePlaylist',item)}>
          <View style={{paddingVertical:10,marginVertical:2,flexDirection:'row'}}>
          <Image source={{uri:item.uri}} style={{height:90,width:80}} />
          <View style={{marginLeft:25,marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>{item.name}</Text>
          <Text style={{fontSize:14,color:'white',marginTop:5,fontStyle:'italic'}}>By {item.creator}</Text>
          </View>
          </View>
          </TouchableOpacity>
          {/* delete icon*/}
          <View style={{right:10,marginTop:45,position:'absolute'}}>
          <AntDesign name = 'delete' color='white' size={30} onPress={()=>this.deletePlaylist(item.id)}/>
          </View>
          </View>
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
