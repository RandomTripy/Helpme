import React,{useState,useEffect} from 'react';
import main from '../assets/main.jpg';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';



export default function mypage({navigation,route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
    return (
    
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
      
      <View style={styles.Buttoncontainer}>
      
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>개인정보수정</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>내가쓴글</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>의뢰한것</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>수주한것</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>설치어플</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>내정보</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>공유하기</Text></TouchableOpacity>
      </View>
      
      </View>

   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: 'white',
  },
  title: {
    //폰트 사이즈
    fontSize: 40,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:1,
	    //왼쪽 공간으로 부터 이격'
    textAlign: 'center',
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center",
  },
  Buttoncontainer:{
    alignItems:'center',
    marginTop:20,
  },
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  loginButton:{
    width:100,
    height:50,
    padding:15,
    backgroundColor:"green",
    borderRadius:8,
    margin:7,
    alignItems:'center',
    marginTop:28,
  },
  middleButton01: {
    width:150,
    height:100,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:150,
    height:100,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"green",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:110,
    height:70,
    padding:15,
    backgroundColor:"red",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center",
    fontSize:30,
    paddingTop:12,
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
});