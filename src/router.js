import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (

  <Navigator headerMode="float">
  <Screen name="RestaurantsScreen"
    component={RestaurantsScreen}
    options={{
      headerStyle: { backgroundColor: '#ffff' },
      headerTitleStyle: { color: '#576d69' , fontSize: 24, fontWeight: 'bold', fontFamily:'Raleway'},
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 

    <Screen name="DishesScreen"
    component={DishesScreen}
    options={{
      headerStyle: { backgroundColor: 'e0f2f2' },
      headerTitleStyle: { color: '#576d69' , fontSize: 24, fontWeight: 'bold', fontFamily:'Raleway'},
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 

<Screen name="CartScreen"
    component={CartScreen}
    options={{
      headerStyle: { backgroundColor: 'e0f2f2' },
      headerTitleStyle: { color: '#576d69' , fontSize: 24, fontWeight: 'bold', fontFamily:'Raleway'},
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 
  </Navigator>
);

export const HomeStack = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default HomeStack;