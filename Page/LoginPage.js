import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginPage() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
        
        <Text style={styles.loginButtonText}>로그인</Text>
        
            
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: 'brown',
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
  
});