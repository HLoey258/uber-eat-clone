import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BasketDishItem({ basketDish }) {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.dishName}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
