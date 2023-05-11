import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/Home";
import CartScreen from "./src/screen/CartScreen";
import FavoriteScreen from "./src/screen/FavoriteScreen";
import DetailScreen from "./src/screen/DetailScreen";
import StepScreen from "./src/screen/StepScreen";
import AboutScreen from "./src/screen/AboutScreen";
//Add this import for importing icons
import { Ionicons } from "@expo/vector-icons";
import AboutScreen from "./src/screen/AboutScreen";

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Cart"
    >
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen name="Favorite" component={FavoriteScreen} />
      <CartStack.Screen name="Detail" component={DetailScreen} />
    </CartStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Card" component={CartScreen} />
      <HomeStack.Screen name="Favorite" component={FavoriteScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
      <HomeStack.Screen name="Step" component={StepScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
    </HomeStack.Navigator>
  );
}

const StepStack = createNativeStackNavigator();
function StepStackScreen() {
  return (
    <StepStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StepStack.Screen name="Step" component={StepScreen} />
    </StepStack.Navigator>
  );
}

const AboutStack = createNativeStackNavigator();
function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="Бидний тухай" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Overview") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Steps") {
              iconName = focused ? "walk" : "walk-outline";
            } else if (route.name === "About") {
              iconName = focused ? "happy" : "happy-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 60,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "black",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#00e0ff",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen
          name="Overview"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Steps"
          component={StepStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="About"
          component={AboutStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
