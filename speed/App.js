import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home'
import CartScreen from './src/screen/CartScreen';
import FavoriteScreen from './src/screen/FavoriteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Add this import for importing icons
import { Ionicons } from '@expo/vector-icons';


const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (

      <CartStack.Navigator screenOptions={{
        headerShown: false
      }}
        initialRouteName="Cart">
        <CartStack.Screen name="Cart" component={CartScreen} />
        <CartStack.Screen name="Favorite" component={FavoriteScreen} />
      </CartStack.Navigator>

  );
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ? 'information-circle'
            : 'information-circle-outline';
          } else if (route.name === 'Cart') {
            iconName = focused
            ? 'list-circle'
            : 'list-circle-outline';
          }
    
    return <Ionicons name={iconName} size={size} color={color}     />;
       },
    })}
    tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Cart" component={CartStackScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}




export default MyTabs;