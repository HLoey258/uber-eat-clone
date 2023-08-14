import { View, FlatList } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../DishListItem";
import Header from "./Header";
import styles from "./styles";
const restaurant = restaurants[0];
export default function RestaurantDetailPage() {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant}></Header>}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item}></DishListItem>}
      ></FlatList>
    </View>
  );
}
