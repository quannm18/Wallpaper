import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState } from 'react';
import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  console.disableYellowBox = true;
var heightImg = 100;
var widthImg = 100;
export default function RowImg(props) {
    const setHightAndWidth = () =>{
        heightImg = props.height
        widthImg = props.width
    }
    useEffect(setHightAndWidth,[])
   
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
      <Image source={{uri:props.url_z}} style={[styles.image,/*{height:props.height/3,/*width:props.width/3}*/]}/>
      <View style={styles.subInfo}>
        <Image style={{width:24,height:24}} source={require('../../Image/eyes.png')}/>
        <Text style={styles.text}>{props.views}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderColor:'black',
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:4,
  },
  image: {
    // width: Dimensions.get('window').width * .48,
    width:"100%",
      //its same to '20%' of device width
    aspectRatio: 1/0.7, // <-- this
    resizeMode: 'cover',
    borderRadius:16,
  },
  subInfo: {
    position: 'absolute',
    bottom:8,
    left: 16,
    flexDirection:"row",
    justifyContent: 'space-evenly'
  },
  text: {
    marginLeft:8,
    color:'white'
  }
})