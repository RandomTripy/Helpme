import React from "react"
import {View,Text,StyleSheet} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function List({content}) {
    return (<View style={styles.list}>
        <View style={styles.listText}>
          <Text style={styles.listTitle} numberOfLines={1}>{content.title}</Text>
          <Text style={styles.listDesc} numberOfLines={3}>{content.desc}</Text>
          <Text style={styles.listHour}>{content.hour}</Text>
        </View>
      </View>)
}

const styles = StyleSheet.create({

  list:{
    
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"column",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10

  },
  listTitle: {
    fontSize:20,
    fontWeight:"bold",
    paddingLeft:20,
  },
  listDesc: {
    fontSize:16,
    padding:20,
  },
  listHour: {
    fontSize:16,
    fontWeight:"normal",
    textAlign:"right",
    padding:20,
  }
})