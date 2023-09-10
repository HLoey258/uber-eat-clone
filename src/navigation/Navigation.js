import React from "react";
// importing react native navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// importingg Screens
import RestaurantDetailPage from "../screens/RestaurantDetailPage/RestaurantDetailPage";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import OrderDetailScreen from "../screens/OrderDetailScreen/OrderDetailScreen";
import DishDetailScreen from "../screens/DishDetailScreen/DishDetailScreen";
import OrderList from "../screens/OrderList/OrderList";

// importing icon
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import BasketScreen from "../screens/BasketScreen/BasketScreen";
import Profile from "../screens/ProfileScreen";

// declare RootNavigator which is stack navigate
const Stack = createNativeStackNavigator();

// the logic is
// Navigation { -> stack navigation
//   HomeTabs{  -> bottom navigation
//     bottom navigation {
//       home: home screen navigation,
//       order: order screen navigation,
//       profile: profile screen,
//     }
//   }
// }

const Navigation = () => {
  // main navigation
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        // nesting bottom navigate in navigate
      ></Stack.Screen>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailPage}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

// declare HomeNavigator which is bottom navigation
// this navigation display in all screens
const Tab = createMaterialBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color}></Foundation>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Order"
        component={OrderStackNavigation}
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
        component={Profile}
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
// home -> restaurant -> dish -> basket
const HomeStack = createNativeStackNavigator();
const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailPage}
        options={{ headerShown: false }}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name="Dish"
        component={DishDetailScreen}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name="Basket"
        component={BasketScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const OrderStack = createNativeStackNavigator();
const OrderStackNavigation = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="OrderList"
        component={OrderList}
      ></OrderStack.Screen>
      <OrderStack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
      ></OrderStack.Screen>
    </OrderStack.Navigator>
  );
};

export default Navigation;
