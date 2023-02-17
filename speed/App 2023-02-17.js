import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles.draft1}>
            <Text>1</Text>
          </View>
          <View style={styles.draft2}>
            <Text>2</Text>
          </View>
          <View style={styles.draft3}>
            <Text>3</Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles.draft1}>
            <Text>1</Text>
          </View>
          <View style={styles.draft2}>
            <Text>2</Text>
          </View>
          <View style={styles.draft3}>
            <Text>3</Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles.draft1}>
            <Text>1</Text>
          </View>
          <View style={styles.draft2}>
            <Text>2</Text>
          </View>
          <View style={styles.draft3}>
            <Text>3</Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles.draft1}>
            <Text>1</Text>
          </View>
          <View style={styles.draft2}>
            <Text>2</Text>
          </View>
          <View style={styles.draft3}>
            <Text>3</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  deed: {
    flex: 4,
    backgroundColor: "aqua",
  },
  dood: {
    flex: 3,
    backgroundColor: "yellow",
  },
  draft1: {
    height: 100,
    width: 100,
    backgroundColor: "pink",
    margin: 10,
  },
  draft2: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    margin: 10,
  },
  draft3: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    margin: 10,
  },
  scroll: {
    backgroundColor: "red",
    flexDirection: "row",
    padding: 20,
    margin: 10,
    height: 270,
  },
});
