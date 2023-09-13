import { View, FlatList } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishLishItem/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
const restaurant = restaurants[0];

// fetching data
import { DataStore } from "aws-amplify";

export default function RestaurantDetailPage() {
  const route = useRoute();

  const id = route.params.id;
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant}></Header>}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item}></DishListItem>}
        keyExtractor={(item) => item.name}
      ></FlatList>
    </View>
    // cmcm
  );
}
