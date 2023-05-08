import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>DetailScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  txt: { color: "white" },
});
