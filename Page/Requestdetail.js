import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FloatingAction } from "react-native-floating-action";
import List from '../Components/List';
import Constants from 'expo-constants';
import {firebase_db} from "../firebaseConfig";


export default function Requestdetail({navigation, route}) {

    let user_idx = Constants.installationId
    console.log(user_idx)

    const [list, setList] = useState({
            "idx":2,
            "category":"문서작성",
            "title":"이렇게 작성부탁합니다!",
            "desc":"부탁합니다!",
            "hour":"0시간 전"
    })
    
    useEffect(()=>{
      console.log(route)
      navigation.setOptions({
          title:route.params.title,
          headerStyle: {
              backgroundColor: '#000',
              shadowColor: "#000",
          },
          headerTintColor: "#fff",
      })

      const { idx } = route.params;
      firebase_db.ref('/helpme/'+idx).once('value').then((snapshot)=>{
        let list = snapshot.val();
        setList(list)
      });

    },[])

    const actions = [
        {
          icon: require("../assets/addbutton.png"),
          name: "enter",
          position: 1
        }
      ];

    const popup = () => {
      Alert.alert("저장되었습니다!")
    }

    

  

    return (
        <View style={styles.container}>
            <View style={styles.textContainer} key={1}>
              <Text style={styles.Title}>{list.title}</Text>
              <ScrollView style={styles.Desc}><Text style={styles.Desc}>{list.desc}</Text></ScrollView>
            </View>
        

        <View style={{ flexDirection:"row" }}>
        <TextInput
          style={styles.comment}
          placeholder={'댓글을 입력해주세요.'}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
          <TouchableOpacity style={styles.enterbutton} onPress={()=>popup()}>
            <FloatingAction actions={actions}/>
          </TouchableOpacity>
        </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        marginTop:20,
        flex:1,
    },
    textContainer:{
        marginBottom:15,
        borderRadius:19,
        borderWidth:5,
        borderColor:"red",
        width:380,
        height:600
    },
    Title: {
        fontSize:30,
        fontWeight:"bold",
        paddingLeft:20,
        backgroundColor:"paleturquoise",
      },
    Desc: {
        fontSize:16,
        padding:20,
        backgroundColor:"aqua",
      },
    
    comment: {
        marginBottom:15,
        width:300,
        height:55,
        borderWidth:2,
        borderColor:'darkblue',
        borderRadius:30,
        marginLeft:15,
        paddingLeft:20,
    },
    enterbutton:{
        alignSelf:'flex-end',
    
    }
})
