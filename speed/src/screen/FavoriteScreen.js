import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import React from "react";

export default function FavoriteScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.txt}>FavoriteScreen</Text>
      </Pressable>
      <Text>{itemId}</Text>
      <Text>{otherParam}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  txt: { color: "white" },
});
