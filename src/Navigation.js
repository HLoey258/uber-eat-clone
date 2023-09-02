import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// importingg Screens
import RestaurantDetailPage from "./screens/RestaurantDetailPage/RestaurantDetailPage";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen/OrderDetailScreen";

// importing icon
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

// declare RootNavigator which is stack navigate
const Stack = createNativeStackNavigator();

// declare HomeNavigator which is Tab navigate
const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeTab} // nesting bottom navigate in navigate
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="OrderScreen"
        component={OrderDetailScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailPage}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color}></Foundation>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Order"
        component={OrderDetailScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="list-alt"
              size={24}
              color={color}
            ></MaterialIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={OrderDetailScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="user-alt"
              size={24}
              color={color}
            ></FontAwesome5>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Navigation;
