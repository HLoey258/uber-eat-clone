import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];
const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.dishName}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
  );
};

export default function DishDetailScreen() {
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
        {/* ssss */}
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
  row: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginRight: 7,
    borderRadius: 3,
  },
  dishName: {
    fontWeight: "500",
  },
});
