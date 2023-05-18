import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.text}>Magnetometer:</Text>
      <Text style={styles.text}>x: {x.toFixed(2)}</Text>
      <Text style={styles.text}>y: {y.toFixed(2)}</Text>
      <Text style={styles.text}>z: {z.toFixed(2)}</Text>
      <Text style={styles.text}>Microtesla (µT): {microTesla.toFixed(2)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
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
  },
});
