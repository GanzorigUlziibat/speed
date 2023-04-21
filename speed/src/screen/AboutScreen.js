import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Image source={require('../../assets/speed.png')} style={styles.img} />
        <Text>МАНДАХ ИХ СУРГУУЛЬ</Text>
        <Text>Мэдээлэл, Технологийн Сургууль</Text>
        <Text>Мандах их сургуулийн Мэдээлэл, Технологийн сургуулийн багш, оюутануудын хамтын бүтээл юм. Дараа дараагийн нэмэлт сайжруулалтыг элсэгч, дүү нар нь сайжруулан хөгжүүлж байна.</Text>
        <Text>Бүх эрх хуулиар хамгаалагдсан @2023</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  view1:{
    alignItems:"center",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 500,
  }
})