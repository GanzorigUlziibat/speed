import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Бидний тухай</Text>
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
        <Text style={styles.txt}>Бүх эрх хуулиар хамгаалагдсан ©2023</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view1: {
    marginTop: 30,
    alignItems: "center",

    paddingHorizontal: 30,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 500,
    marginTop: 20,
  },
  txt: {
    color: "white",
    textAlign: "center",
    // alignSelf: "center",
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
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15,
  },
});
