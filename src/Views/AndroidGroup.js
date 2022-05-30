import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Linking } from 'react-native';
var URL = 'https://www.facebook.com/groups/mob.fpoly.hn/?multi_permalinks=298378648857184%2C297471155614600&notif_id=1644846278932964&notif_t=group_activity&ref=notif';

console.disableYellowBox = true;
export default class AndroidGroup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../Image/4.png')} styles={styles.image}/>
        <Text style={[styles.text, styles.textThank]}>Thanks you for using my app!</Text>
        {/* <Text style={[styles.text, styles.textWish]}>Have a good day!</Text> */}
        <Text style={[styles.text, {fontWeight: 'bold', marginTop:16, fontSize:16}]}>Join us to find more interesting:</Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(URL)}>
          <Text style={[styles.textButton]}>JOIN NOW</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#4f5b62',
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    width:180,
    height:null,
    aspectRatio:300/186,
  },
  text: {

    color:'white'
  },
  textThank:{
    fontSize:24,
    marginTop:60,
  },
  textWish: {
    fontSize:20,
    marginTop:16,
    marginBottom:16
  },
  button: {
    marginTop:16,
    height:48,
    marginLeft:32,
    marginRight:32,
    backgroundColor:'#1c313a',
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:24
  },
  textButton: {
    color:'white'

  }
})