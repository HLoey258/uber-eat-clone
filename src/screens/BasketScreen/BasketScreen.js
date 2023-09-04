import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem/BasketDishItem";
const restaurant = restaurants[0];
export default function BasketScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.title}>Your item</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => (
          <BasketDishItem basketDish={item}></BasketDishItem>
        )}
      ></FlatList>
      <Text style={styles.separator}> </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      ></View>
      <View style={styles.basket}>
        <Text style={styles.basketDetail}>Create Order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    padding: 15,
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  separator: {
    marginVertical: 25,
    height: 1,
    backgroundColor: "grey",
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  basket: {
    backgroundColor: "black",
    padding: 20,
    marginTop: "auto",
    alignItems: "center",
  },
  basketDetail: {
    fontSize: 15,
    width: "50%",
    color: "white",
  },
});
