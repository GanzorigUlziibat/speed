import { View, Text, SafeAreaView, Image,StyleSheet } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/speed.png')} style={styles.img}/>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  img:{
    width: 300,
    height: 300,
  }
})