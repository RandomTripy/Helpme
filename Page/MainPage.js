import React,{useState,useEffect} from 'react';
import main from '../assets/main.jpg';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import Loading from '../Components/LoadingPage';


export default function MainPage({navigation,route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  //기존 꿀팁을 저장하고 있을 상태
  const [state,setState] = useState([])
  //카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
  const [cateState,setCateState] = useState([])

  //컴포넌트에 상태를 여러개 만들어도 됨
  //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
  //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
  const [ready,setReady] = useState(true)

  useEffect(()=>{
	   
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{
        //헤더의 타이틀 변경
        navigation.setOptions({
            title:'도와줄래?'
        })
        //꿀팁 데이터로 모두 초기화 준비
        
        setReady(false)
    },1000)

    
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
	//처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
  //useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환(그려짐)
  return ready ? <Loading/> :  (
    
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
      <View style={{ flexDirection:"row-reverse" }}>
        <TouchableOpacity style={styles.loginButton} onPress={()=>{navigation.navigate('LoginPage')}}><Text style={styles.loginButtonText}>로그인</Text></TouchableOpacity>
      </View>
      <Text style={styles.title}>도와줘!</Text>
      <Image style={styles.mainImage} source={main}/>
      
      <View style={styles.Buttoncontainer}>
      
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>의뢰</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>수주</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>질문</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>공지사항</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>설치어플</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{navigation.navigate('mypage')}}><Text style={styles.middleButtonText}>내정보</Text></TouchableOpacity>
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
    borderWidth:3,
    borderColor:'black',
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