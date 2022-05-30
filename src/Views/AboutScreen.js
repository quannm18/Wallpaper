import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

console.disableYellowBox = true;
export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../Image/4.png')}/>
        <Text style={styles.title}>About app</Text>
        <View style={styles.description}>
          <Text style={styles.text}>This is a app which I cloned about 50 hours.</Text>
          <Text style={styles.text}>The base app using Android Studio to make it and we have to clone it using React Native</Text>
          <Text style={styles.text}>It's so difficult but after 50 hours, I finished it.</Text>
          <Text style={styles.text}>The app is Gallery Online to relax, see about the beautiful view of a lot of countries in the world</Text>
          <Text style={styles.text}>I hope can get <Text style={{color:'red'}}>10 points</Text> to have a nicer sleep</Text>
          <Text style={styles.text}>I hope you like it!</Text>
          <Text  style={[styles.text,{textAlign:'center'}]}>Thanks! Teachers.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#4f5b62',
    flex:1,
  },
  image:{
    margin:16,
    width:180,
    height:null,
    aspectRatio:300/185     
  },
  title:{
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:24,
    margin:32
  },
  text:{
    color:'white',
    marginLeft:16,
    marginRight:16,
    marginBottom:8
  }
})