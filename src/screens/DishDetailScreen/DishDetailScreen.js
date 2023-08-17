import { View, Text, StyleSheet, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

import restaurants from "../../../assets/data/restaurants.json";

const dishes = restaurants[0].dishes[0];

export default function DishDetailScreen() {
  const [quantity, setQuantity] = useState(0);
  const handlePlus = () => {
    return setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity >= 1) return setQuantity(quantity - 1);
  };
  const getTotal = () => {
    return dishes.price * quantity;
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dishes.name}</Text>
      <Text style={styles.decription}>{dishes.description}</Text>
      <Text style={styles.separator}> </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <AntDesign
          name="minuscircleo"
          size={60}
          color={"black"}
          onPress={handleMinus}
        ></AntDesign>
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={"black"}
          onPress={handlePlus}
        ></AntDesign>
      </View>
      <View style={styles.basket}>
        <Text style={styles.basketDetail}>
          Add {quantity} to basket (${getTotal()})
        </Text>
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
    // strike sd
  },
});
