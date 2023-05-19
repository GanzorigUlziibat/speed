import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from "react-native";
import { Magnetometer } from "expo-sensors";

export default function MagnetometerComponent() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((result) => {
        setData(result);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  const microTesla = Math.sqrt(x * x + y * y + z * z);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Magnetometer</Text>
      <View style={styles.vm1}>
      <Text style={styles.text1}>x: {x.toFixed(2)}</Text>
      <Text style={styles.text1}>y: {y.toFixed(2)}</Text>
      <Text style={styles.text1}>z: {z.toFixed(2)}</Text>
      </View>
      <View style={styles.vm2}>
      <Text style={styles.text2}>{microTesla.toFixed(2)}</Text>
      <Text style={styles.text3}>µ(T)</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor:'black',
  },
  text1:{
    fontSize:20,
    color:'white',

  },
  text: {
    textAlign: "center",
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius:10,
  },
  vm1:{
    flexDirection:'row',
    height:80,
    justifyContent:'center',
    alignItems:'center'
  },
  text2:{
    fontSize:40,
    color:'white'

  },
  text3:{
    color:'white'
  },
  vm2:{
    alignItems:'center'
  }
});
