import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, Button, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import main from '../assets/addbutton.png';
import DropDownPicker from 'react-native-dropdown-picker';
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';







export default function Requestadd(navigation, route) {
    console.disableYellowBox = true;
    let user_idx = Constants.installationId
    console.log(user_idx)

    const [save, Setsave] = useState('');
    const [header, settitle] = useState('');
    const [mainText, setdesc] = useState('');

    
    function submit()  {
      var category = value;
      var title = header;
      var desc = mainText;
        
    // like 방 안에
    // 특정 사용자 방안에
    // 특정 찜 데이터 아이디 방안에
    // 특정 찜 데이터 몽땅 저장!
    // 찜 데이터 방 > 사용자 방 > 어떤 찜인지 아이디
    
    firebase_db.ref('/helpdata/'+user_idx).push({
      category : category,
      title : title,
      desc : desc},
      function(error){
        console.log(error)
        Alert.alert("저장되었습니다.")
    });
}


    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '문서작성', value: '문서작성'},
    {label: '물건구매', value: '물건구매'}
  ]);
  
  
  
  // const [category, setcategory] = useState(null);


  

  

    

    return (
      
      <View style={styles.container}>
        <DropDownPicker
      style={styles.dropdown}
      placeholder={'카테고리를 설정해주세요.' }
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      
    />
        <TextInput
          style={styles.comment}
          placeholder={'제목을 입력해주세요.'}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={true}
          onChangeText={(header)=>settitle(header)}
        />
        <View style={{ flexDirection:"row" }}>
        <Image style={styles.camera} source={main}/><Image style={styles.photo} source={main}/>
        </View>
        
        <TextInput
          style={styles.comment1}
          placeholder={'내용을 입력해주세요.'}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={true}
          onChangeText={(desc)=>setdesc(desc)}
        />
        <View style={{ flexDirection:"row" }}>
        <Button title="완료"
        style={styles.button1}/>
        <Button title="취소"
        style={styles.button2}/>
        </View>
        <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>submit()}><Text style={styles.button1}>완료</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.button2}>취소</Text></TouchableOpacity>
        </View>
      </View>
    )
};

       
    


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginTop:15,
    },
    dropdown:{
      width:350,
      height:55,
      marginBottom:15,
      alignSelf:'center',
      borderColor:'darkblue',
      borderWidth:2,
    },
    title: {
        fontSize:30,
        fontWeight:"bold",
        paddingLeft:20,
        backgroundColor:"paleturquoise",
      },
      desc: {
        fontSize:16,
        padding:20,
        backgroundColor:"aqua",
      },
    textContainer:{
        marginBottom:15,
        borderRadius:19,
        borderWidth:5,
        borderColor:"red"
    },
    comment: {
        marginBottom:15,
        width:350,
        height:55,
        borderWidth:2,
        borderColor:'darkblue',
        borderRadius:9,
        paddingLeft:20,
    },
    comment1: {
      width:350,
      height:400,
      borderWidth:2,
      borderColor:'darkblue',
      borderRadius:9,
      marginTop:15,
    },
    enterbutton:{
        right:0,
    
    },
    camera:{
      width:50,
      height:50,
      marginRight:20,
    },
    photo:{
      width:50,
      height:50,
    },
    button1:{
      width:150,
      height:40,
      borderWidth:2,
      borderColor:"darkblue",
      marginRight:30,
    },
    button2:{
      width:150,
      height:40,
      borderWidth:2,
      borderColor:"darkblue",
    }
}
)
