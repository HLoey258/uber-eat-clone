import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetailPage from "./screens/RestaurantDetailPage/RestaurantDetailPage";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen/OrderDetailScreen";
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="OrderScreen"
        component={OrderDetailScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailPage}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
