import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';


export default function Requestdetail() {
    console.disableYellowBox = true;

    useEffect(()=>{
	   
        //뒤의 1000 숫자는 1초를 뜻함
        //1초 뒤에 실행되는 코드들이 담겨 있는 함수
        setTimeout(()=>{
            //헤더의 타이틀 변경
            navigation.setOptions({
                title:'도움요청'
            })
            //꿀팁 데이터로 모두 초기화 준비
            
            setReady(false)
        },1000)
    
        
      },[])

    return (
        <ScrollView style={styles.container}>
      
            <View style={styles.Buttoncontainer}>
      
            <View style={{ flexDirection:"row" }}>
               <TouchableOpacity style={styles.middleButton01} onPress={()=>{navigation.navigate('Requestlist')}}><Text style={styles.middleButtonText1}>도움요청</Text></TouchableOpacity>
              <TouchableOpacity style={styles.middleButton02} onPress={()=>{navigation.navigate('Installapp')}}><Text style={styles.middleButtonText2}>설치어플</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection:"row" }}>
                <TouchableOpacity style={styles.middleButton03} onPress={()=>share()}><Text style={styles.middleButtonText3}>공유하기</Text></TouchableOpacity>
            </View>
      
            </View>

   
    </ScrollView>
    )
}

const styles = StyleSheet.create({})
