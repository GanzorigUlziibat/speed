import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate());
      start.setHours(4);
      start.setMinutes(0);
      start.setSeconds(0);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    // return () => subscription && subscription.remove();
  }, [currentStepCount]);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedCircularProgress
        size={320}
        width={15}
        fill={(100 / 5000) * pastStepCount}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="white"
        dashedTint={{ width: 2, gap: 1 }}
        arcSweepAngle={210}
        rotation={255}
        duration={100}
        prefill={50}
        dashedBackground={{ width: 2, gap: 1 }}
      >
        {(fill) => (
          <View style={styles.view1}>
            <Text style={styles.txt1}>Today's steps</Text>
            <Text style={styles.txt2}>{pastStepCount}</Text>
            <Text style={styles.txt3}>Steps Goal: 5000</Text>
            <Text style={styles.txt4}>
              {(100 / 5000) * pastStepCount}% completed{" "}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View></View>
      <Text style={styles.txt3}>
        Pedometer.isAvailableAsync(): {isPedometerAvailable}
      </Text>
      <Text style={styles.txt3}>
        Steps taken in the last 24 hours: {pastStepCount}
      </Text>
      <Text style={styles.txt3}>
        Walk! And watch this go up: {currentStepCount}
      </Text>
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
  view1: {
    alignItems: "center",
  },
  txt1: {
    fontSize: 25,
    color: "white",
  },
  txt2: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#00e0ff",
  },
  txt3: {
    color: "white",
  },
  txt4: {
    color: "grey",
    marginTop: 5,
  },
});
