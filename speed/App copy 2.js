import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

export default function App() {
  const [name, setName] = useState("Sasha");
  const [lection07json, setLection07json] = useState({
    number: 1,
    title: "state",
  });
  const [lection07arr, setLection07arr] = useState([1, 2, 3, 4, 5]);
  const [islection07, setIsLection07] = useState(true);
  const onPressHanler = () => {
    setName("Programming with Masha");
    setLection07json({ number: lection07json.number + 1, title: "style" });
    setIsLection07(!islection07);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.greeting}>
          <Text style={styles.greetingmessage}>Өдрийн мэнд</Text>
          <Text>a</Text>
          <Text>b</Text>
          <Text>c</Text>
        </View>
        <View style={styles.unguv0}>
          <View style={styles.lection07v}>
            <Text style={styles.lection07text1}>My name is {name}</Text>
            <Text style={styles.lection07text1}>
              This id: {lection07json.number} title: {lection07json.title}
            </Text>
            <Button
              title={islection07 ? "Change name" : "NEXT"}
              onPress={() => {
                onPressHanler();
              }}
            />
          </View>
        </View>
        <View style={styles.unguv0}>
          <View style={styles.unguv1}>
            <Text style={styles.ungutext}>Товч ном</Text>
            <Entypo style={styles.unguicon} name="triangle-down" />
          </View>
          <View style={styles.unguv2}>
            <Text style={styles.ungutext}>Товч ном</Text>
            <Entypo style={styles.unguicon} name="spreadsheet" />
          </View>
          <View style={styles.unguv3}>
            <Text style={styles.ungutext}>Товч ном</Text>
            <Entypo style={styles.unguicon} name="switch" />
          </View>
          <View style={styles.unguv4}>
            <Text style={styles.ungutext}>Товч ном</Text>
            <Entypo style={styles.unguicon} name="tripadvisor" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollcontainer: {
    // flex: 1,
    backgroundColor: "#ccc",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  greetingmessage: {
    fontSize: 30,
    fontWeight: "700",
  },
  unguv0: {
    height: 310,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  unguv1: {
    width: 160,
    height: 120,
    backgroundColor: "aqua",
    marginTop: 20,
    borderRadius: 15,
  },
  unguv2: {
    width: 160,
    height: 120,
    backgroundColor: "orange",
    marginTop: 20,
    borderRadius: 15,
  },
  unguv3: {
    width: 160,
    height: 120,
    backgroundColor: "yellow",
    marginTop: 20,
    borderRadius: 15,
  },
  unguv4: {
    width: 160,
    height: 120,
    backgroundColor: "purple",
    marginTop: 20,
    borderRadius: 15,
  },
  ungutext: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    margin: 10,
  },
  unguicon: {
    fontSize: 40,
    color: "white",
    marginLeft: 10,
  },
  lection07v: { alignItems: "center", justifyContent: "center" },
  lection07text1: {
    fontSize: 20,
  },
});
