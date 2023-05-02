import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={require("../../src/images/logo.jpg")}
          style={styles.img}
        />
        <Text style={styles.txt1}>МАНДАХ ИХ СУРГУУЛЬ</Text>
        <Text style={styles.txt2}>Мэдээлэл, Технологийн Сургууль</Text>
        <Text style={styles.txt}>
          Мандах их сургуулийн Мэдээлэл, Технологийн сургуулийн багш,
          оюутануудын хамтын бүтээл юм. Дараа дараагийн нэмэлт сайжруулалтыг
          элсэгч, дүү нар нь сайжруулан хөгжүүлж байна.
        </Text>
        <Text style={styles.txt}>Бүх эрх хуулиар хамгаалагдсан @2023</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  view1: {
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 500,
    marginTop: 50,
  },
  txt: {
    color: "white",
  },
  txt1: {
    color: "white",
    marginTop: 20,
    fontSize: 20,
  },
  txt2: {
    color: "white",
    marginBottom: 15,
    fontSize: 15,
  },
});
