import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Requestdetail(navigation) {
    console.disableYellowBox = true;

    const list = {
        "idx":0,
        "category":"문서작성",
        "title":"토마토 주스 구매하는데 어렵네요..",
        "desc":"몇번을 시도해도 결제에서 막히네요ㅠ 도와주세요!",
        "hour":"1시간 전"
    }

    return (<>
        <ScrollView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{list.title}</Text>
                <Text style={styles.desc}>{list.desc}</Text>
            </View>
            
        </ScrollView>
        <TextInput
          style={styles.comment}
          placeholder={'댓글을 입력해주세요.'}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        marginTop:20,
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
        width:300,
        height:55,
        borderWidth:2,
        borderColor:'black',
        borderRadius:30,
        marginLeft:15,
        paddingLeft:20,

    }
})
