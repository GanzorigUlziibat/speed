import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [counter,setCounter] = useState(0);

  const test=()=>{
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }

  const hurd=()=>{
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      hurd()
      test()
    }, 500);

    return () => clearInterval(interval);
  }, []);

  let text = '0';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = Math.round(location.coords.speed * 3.6);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.cntr}>{counter}</Text>
      <Text>KM/H</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontSize: 200,
  },
  cntr: {
    color: 'white',
  }
});

