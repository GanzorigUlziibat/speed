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
        backgroundColor="black"
        dashedTint={{ width: 2, gap: 1 }}
        arcSweepAngle={210}
        rotation={255}
        duration={100}
        prefill={50}
        dashedBackground={{ width: 2, gap: 1 }}
      >
        {(fill) => (
          <View>
            <Text>Todays steps</Text>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {pastStepCount}
            </Text>
            <Text>Todays goal 5000</Text>
            <Text>completed: {(100 / 5000) * pastStepCount} %</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View></View>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
