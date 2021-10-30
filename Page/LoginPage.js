import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import main from '../assets/main.jpg'



export default function LoginPage(navigation, route) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
        
        <Image style={styles.mainImage} source={main}/>
        
        <TextInput
          style={styles.textFormTop}
          placeholder={'아이디'}
          onChangeText={(userId) => setUserId(userId)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormTop}
          placeholder={'비밀번호'}
          onChangeText={(userId) => setUserId(userId)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <View style={{ flexDirection:"row" }}>
          <TouchableOpacity style={styles.loginButton1} onPress={()=>{navigation.navigate('MainPage')}}><Text style={styles.loginButtonText}>로그인</Text></TouchableOpacity>
          <TouchableOpacity style={styles.loginButton2} onPress={()=>{navigation.navigate('SignUp')}}><Text style={styles.loginButtonText}>가입하기!</Text></TouchableOpacity>
        </View>  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: 'white',
    alignContent:'center',
  },
  loginButtonText: {
    //폰트 사이즈
    fontSize: 40,
    //폰트 두께
    fontWeight: '500',
    //위 공간으로 부터 이격
    marginTop:1,
	    //왼쪽 공간으로 부터 이격'
    textAlign: 'center',
    
  },
  loginButton1: {
    width:150,
    height:70,
    borderWidth:3,
    borderRadius:15,
    backgroundColor:'white',
  },
  loginButton2: {
    width:180,
    height:70,
    borderWidth:3,
    borderRadius:15,
    backgroundColor:'white',
  },
  textFormTop: {
    backgroundColor :'white',
    borderWidth:1,
    width:150,
    height:50,
    borderRadius:15,
    textAlign:'center',
    marginHorizontal:1,
  },
  mainImage: {
    width:150,
    height:90,
    borderRadius:5,
    borderColor:'black',
    borderWidth:3,

  }
  
});