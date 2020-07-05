import React,{useState} from 'react';
import {View,Text,Image,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Miniplayer({ONPRESS}){
  return (
    <TouchableWithoutFeedback onPress={()=>{
      ONPRESS()}}>
    <View style={styles.container}>
        <Image style={{height:80,width:80}}source={{uri:'https://images.squarespace-cdn.com/content/58ab2fce20099e7487a18b2a/1488423618745-3IDAU928ZPC21H89CEGN/Blurryface-twenty-one-pilots-cover-art.png?content-type=image%2Fpng'}}/>
       <Text style={styles.text}>Stressed Out - Twenty One Pilots</Text>
       <View style={{position:'absolute',right:30}}><AntDesign name="playcircleo" color='white' size={35}/></View>
     </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",paddingHorizontal:16
  }
});
