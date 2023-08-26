import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem/BasketDishItem";

const order = orders[0];

const OrderDetailScreenHeader = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: order.Restaurant.image,
        }}
        style={styles.image}
      ></Image>
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={35}
          color={"white"}
          style={styles.imageIcon}
        ></Ionicons>
      </View>
      <View style={styles.container}>
        <View style={styles.restaurantDetail}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text>Your Items</Text>
        </View>
      </View>
    </View>
  );
};

export default function OrderDetailScreen() {
  return (
    <FlatList
      data={restaurants[0].dishes}
      ListHeaderComponent={OrderDetailScreenHeader}
      renderItem={({ item }) => (
        <BasketDishItem basketDish={item}></BasketDishItem>
      )}
    ></FlatList>
  );
}
