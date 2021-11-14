import React from "react"
import {View,Text,StyleSheet, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import data from "../data.json"

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function List({content,navigation}) {


    return (
      <TouchableOpacity style={styles.container} onPress={()=>{navigation.naviagate('Requestdetail',content)}}>
        
          <Text style={styles.Title} numberOfLines={1}>{content.title}</Text>
          <ScrollView style={styles.Desc} numberOfLines={3}><Text style={styles.Title}>{content.desc}</Text></ScrollView>
          
        
      </TouchableOpacity>)
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:"column",
    
    width:100,
    height:50,

  },
  Title: {
    fontSize:20,
    fontWeight:"bold",
    paddingLeft:20,
  },
  Desc: {
    fontSize:16,
    padding:20,
    backgroundColor:"aqua",
  },
  Hour: {
    fontSize:16,
    fontWeight:"normal",
    textAlign:"right",
    padding:20,
  },
})