import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import data from '../data.json'
import List from '../Components/List'
import addbutton from '../assets/addbutton.png';
import { FloatingAction } from "react-native-floating-action";

//import {firebase_db} from "../firebaseConfig"


export default function Requestlist({navigation,route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  const actions = [
    {
      icon: require("../assets/addbutton.png"),
      name: "navigation",
      position: 1
    }
  ];

  const [state,setState] = useState([])

  const [cateState,setCateState] = useState([])

  

  

  useEffect(()=>{
    setTimeout(()=>{
      //헤더의 타이틀 변경
      navigation.setOptions({
          title:'도움요청'
      })
          let list = data.list;
          setState(list)
          setCateState(list)
          
       },1000)
//      firebase_db.ref('/helpList').once('value').then((snapshot) => {
//          console.log("파이어베이스에서 데이터 가져왔습니다!!")
//          let list = snapshot.val();
//          setState(list)
//          setCateState(list)
//          setReady(false)
//    },1500)
    
  },[])

  const category = (cate) => {
    if(cate == "전체보기"){
        //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
        setCateState(state)
    }else{
        setCateState(state.filter((d)=>{
            return d.category == cate
        }))
    }
}


   

    return (
    
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
      <View style={styles.container}>
          <ScrollView style={styles.topContainer} horizontal indicatorStyle={"white"}>
            <TouchableOpacity style={styles.topButton01}><Text style={styles.topButtonText}>전체보기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topButton01}><Text style={styles.topButtonText}>문서 작성</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topButton01}><Text style={styles.topButtonText}>물건 구매</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topButton01}><Text style={styles.topButtonText}>전체보기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topButton01}><Text style={styles.topButtonText}>문서 작성</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topButton01}><Text style={styles.topButtonText}>물건 구매</Text></TouchableOpacity>
          </ScrollView>
          <ScrollView style={styles.listContainer}>
              {
                <>
                <TouchableOpacity style={styles.listbutton01}onPress={()=>{navigation.navigate('Requestdetail')}}>
                <View style={{flexDirection: 'row'}}>
                 <Text style={styles.categoryText}>문서작업</Text>
                 <Text style={styles.timeText}>1h ago</Text>
                 </View>
                 <Text style={styles.titleText}>공문을 보내려고 합니다! 아래에 첨부사진 파일 올렸습니다! 부탁드립니다!</Text>
                 <Text style={styles.mainText}>첨부된 사진대로 부탁드립니다.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listbutton02}>
                <View style={{flexDirection: 'row'}}>
                 <Text style={styles.categoryText}>물건구매</Text>
                 <Text style={styles.timeText}>3h ago</Text>
                 </View>
                 <Text style={styles.titleText}>토마토 주스 구매하는데 잘 안됩니다 ㅠ</Text>
                 <Text style={styles.mainText}>결제할때마다 막힙니다. ㅜㅜ</Text>
                </TouchableOpacity>
                </>
              }
          </ScrollView>
      
      
          <TouchableOpacity style={styles.addbutton}onPress={()=>{navigation.navigate('Requestdetail')}}>
            <FloatingAction actions={actions}/>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: 'white',
    alignSelf:'center',
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
  topContainer:{
    marginTop:4,
    marginLeft:5,
    height:80
  },
  listContainer:{
    padding:15,
    alignContent:'center',
  },
  listbutton01: {
    width:380,
    height:400,
    backgroundColor:"aqua",
    marginBottom:15,
  },
  listbutton02: {
    width:380,
    height:400,
    backgroundColor:"aqua",
    marginBottom:15,
  },
  topButton01: {
    width:100,
    height:50,
    padding:2,
    backgroundColor:"darkblue",
    borderRadius:15,
    margin:5,
  },
  topButtonText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center",
    fontSize:15,
    paddingTop:12,
  },
  categoryText: {
    fontSize:16,
    fontWeight:"bold",
    textAlign:"left",
    padding:20,
  },
  timeText: {
    fontSize:16,
    fontWeight:"normal",
    textAlign:"right",
    padding:20,
  },
  titleText: {
    fontSize:20,
    fontWeight:"bold",
    paddingLeft:20,
  },
  mainText: {
    fontSize:16,
    padding:20,
  },
  addbutton: {
    width:100,
    height:10,
    position:'absolute',
    bottom:7,
    right:10,
  },
})