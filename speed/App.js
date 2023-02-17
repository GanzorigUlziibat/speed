import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/Home";
import CartScreen from "./src/screen/CartScreen";
import FavoriteScreen from "./src/screen/FavoriteScreen";
import DetailScreen from "./src/screen/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Add this import for importing icons
import { Ionicons } from "@expo/vector-icons";

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
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
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
            } else if (route.name === "Carts") {
              iconName = focused ? "list-circle" : "list-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "black",
            position: "absolute",
            borderTopWidth: 0,
          },
        })}
        tabBarOptions={{
          activeTintColor: "orange",
          inactiveTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Overview"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Carts"
          component={CartStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
