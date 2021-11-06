import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';


export default function Requestdetail(navigation) {
    console.disableYellowBox = true;

    const list = {
        "idx":0,
        "category":"문서작성",
        "title":"토마토 주스 구매하는데 어렵네요..",
        "desc":"몇번을 시도해도 결제에서 막히네요ㅠ 도와주세요!",
        "hour":"1시간 전"
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{list.title}</Text>
                <Text style={styles.desc}>{list.desc}</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:20,
      },
      desc: {
        fontSize:16,
        padding:20,
      },
})
