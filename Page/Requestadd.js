import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



export default function Requestadd(navigation) {
    console.disableYellowBox = true;

    return (
        <TouchableOpacity style={styles.scrollButton01}><Text style={styles.scrollButtonText}>전체보기</Text></TouchableOpacity>
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
        borderColor:'darkblue',
        borderRadius:30,
        marginLeft:15,
        paddingLeft:20,
    },
    enterbutton:{
        right:0,
    
    }
})
