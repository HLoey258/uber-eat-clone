import { View, Text, StyleSheet, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

import restaurants from "../../../assets/data/restaurants.json";

const dishes = restaurants[0].dishes[0];

export default function DishDetailScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>basket</Text>
      <Text style={styles.decription}>{dishes.description}</Text>

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
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
  },
  decription: {
    fontSize: 16,
    color: "grey",
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
