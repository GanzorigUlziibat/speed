import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.v0}>
          <View style={styles.v1}>
            <Text style={styles.v0text}>Tovch nom</Text>
            <Ionicons name="chevron-forward" style={styles.v0icon} />
          </View>
          <View style={styles.v2}>
            <Text style={styles.v0text}>Tovch nom1</Text>
            <Foundation name="upload-cloud" style={styles.v0icon} />
          </View>

          <View style={styles.v3}>
            <Text style={styles.v0text}>Tovch nom2</Text>
            <Ionicons name="calculator" style={styles.v0icon} />
          </View>
          <View style={styles.v4}>
            <Text style={styles.v0text}>Tovch nom3</Text>
            <Ionicons name="chevron-forward" style={styles.v0icon} />
          </View>
        </View>
        <Pressable
          onPress={() => {
            alert("nom view 0 pressed");
          }}
        >
          <View style={styles.nomView0}>
            <Text style={styles.nomview0text0}>kiki bolon jiji</Text>
            <Text style={styles.nomview0text1}>Ene doloo hongoiin ontsloh</Text>
            <Image
              style={styles.nomviewimg0}
              source={require("./assets/favicon.png")}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            alert("nom view 0 pressed");
          }}
        >
          <View style={styles.nomView0}>
            <Text style={styles.nomview0text0}>kiki bolon jiji</Text>
            <Text style={styles.nomview0text1}>Ene doloo hongoiin ontsloh</Text>
            <Image
              style={styles.nomviewimg0}
              source={require("./assets/favicon.png")}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            alert("nom view 0 pressed");
          }}
        >
          <View style={styles.nomView0}>
            <Text style={styles.nomview0text0}>kiki bolon jiji</Text>
            <Text style={styles.nomview0text1}>Ene doloo hongoiin ontsloh</Text>
            <Image
              style={styles.nomviewimg0}
              source={require("./assets/favicon.png")}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            alert("nom view 0 pressed");
          }}
        >
          <View style={styles.nomView0}>
            <Text style={styles.nomview0text0}>kiki bolon jiji</Text>
            <Text style={styles.nomview0text1}>Ene doloo hongoiin ontsloh</Text>
            <Image
              style={styles.nomviewimg0}
              source={require("./assets/favicon.png")}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            alert("nom view 0 pressed");
          }}
        >
          <View style={styles.nomView0}>
            <Text style={styles.nomview0text0}>kiki bolon jiji</Text>
            <Text style={styles.nomview0text1}>Ene doloo hongoiin ontsloh</Text>
            <Image
              style={styles.nomviewimg0}
              source={require("./assets/favicon.png")}
            />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  v0: {
    backgroundColor: "white",
    height: 270,
    borderRadius: 20,
    margin: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    // padding: 30,
  },
  v1: {
    height: 100,
    width: 150,
    backgroundColor: "aqua",
    margin: 5,
  },
  v2: {
    height: 100,
    width: 150,
    backgroundColor: "red",
    margin: 5,
  },
  v3: {
    height: 100,
    width: 150,
    backgroundColor: "orange",
    margin: 5,
  },
  v4: {
    height: 100,
    width: 150,
    backgroundColor: "purple",
    margin: 5,
  },
  v0text: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    margin: 15,
  },
  v0icon: {
    fontSize: 32,
    color: "white",
    marginLeft: 15,
  },
  nomView0: {
    backgroundColor: "white",
    height: 500,
    margin: 15,
    borderRadius: 20,
    // padding: 20,
    overflow: "hidden",
  },
  nomview0text0: {
    color: "grey",
    textTransform: "uppercase",
    margin: 20,
  },
  nomview0text1: {
    color: "black",
    fontSize: 30,
    fontWeight: "700",
    // textTransform: "uppercase",
    marginBottom: 20,
    marginLeft: 20,
  },
  nomviewimg0: { width: "100%", aspectRatio: 1, height: undefined },
});
