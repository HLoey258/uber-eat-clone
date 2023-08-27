import { FlatList } from "react-native";
import React from "react";
import BasketDishItem from "../../components/BasketDishItem/BasketDishItem";
import OrderDetailHeader from "./OrderDetailHeader";
import restaurants from "../../../assets/data/restaurants.json";

export default function OrderDetailScreen() {
  return (
    <FlatList
      data={restaurants[0].dishes}
      ListHeaderComponent={OrderDetailHeader} // add Header Component
      renderItem={({ item }) => (
        <BasketDishItem basketDish={item}></BasketDishItem>
      )}
    ></FlatList>
  );
}
