import React from 'react'
import {View,Text} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

class Rating extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      first:true,
      second:false,
      third:false,
      fourth:false,
      fifth:false,
    };
  }
  setfirst = ()=>{this.setState({second:false,third:false,fourth:false,fifth:false})}
  setSecond = ()=>{this.setState({first:true,second:true,third:false,fourth:false,fifth:false})}
  setThird = ()=>{this.setState({first:true,second:true,third:true,fourth:false,fifth:false})}
  setFourth = ()=>{this.setState({first:true,second:true,third:true,fourth:true,fifth:false})}
  setFifth = ()=>{this.setState({first:true,second:true,third:true,fourth:true,fifth:true})}
  render(){
    const first = this.state.first?(
      <Entypo name = 'heart' color='red'size={40} onPress={()=>{this.setfirst()}}/>
    ):(<Entypo name = 'heart-outlined' color='white'size={40} onPress={()=>{this.setfirst()}}/>)
    const second = this.state.second?(
      <Entypo name = 'heart' color='red'size={40} onPress={()=>{this.setSecond()}}/>
    ):(<Entypo name = 'heart-outlined' color='white'size={40} onPress={()=>{this.setSecond()}}/>)
    const third = this.state.third?(
      <Entypo name = 'heart' color='red'size={40} onPress={()=>{this.setThird()}}/>
    ):(<Entypo name = 'heart-outlined' color='white'size={40} onPress={()=>{this.setThird()}}/>)
    const fourth = this.state.fourth?(
      <Entypo name = 'heart' color='red'size={40} onPress={()=>{this.setFourth()}}/>
    ):(<Entypo name = 'heart-outlined' color='white'size={40} onPress={()=>{this.setFourth()}}/>)
    const fifth = this.state.fifth?(
      <Entypo name = 'heart' color='red'size={40} onPress={()=>{this.setFifth()}}/>
    ):(<Entypo name = 'heart-outlined' color='white'size={40} onPress={()=>{this.setFifth()}}/>)
    return(
      <View style={{flexDirection:'row',marginLeft:'25%',marginTop:'5%'}}>
      {first}{second}{third}{fourth}{fifth}
      </View>
    )
}
}

export default Rating
