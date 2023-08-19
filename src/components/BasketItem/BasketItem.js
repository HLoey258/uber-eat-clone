import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BasketItem() {
  return (
    <View style={styles.page}>
      <Text style={styles.restaurant}>Restaurant Name</Text>
      <Text style={styles.title}>Your Items</Text>
      <View style={styles.basketDetail}>
        <Text style={styles.itemName}>name</Text>
        <Text style={styles.itemPrice}>price</Text>
      </View>
      <Text style={styles.basket}>BasketItem</Text>
      <View style={styles.total}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  restaurant: {
    fontSize: 40,
    fontWeight: "400",
  },
  title: {
    marginVertical: 30,
    fontSize: 15,
    fontWeight: "bold",
  },
  basketDetail: {
    padding: 15,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  itemName: {
    fontSize: 17,
    fontWeight: "500",
  },
});
