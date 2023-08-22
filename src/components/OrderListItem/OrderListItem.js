import { View, Text, Image } from "react-native";
import React from "react";

export default function OrderListItem({ order }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 15 }}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text>{order.Restaurant.name}</Text>
      <Text>{order.status}</Text>
    </View>
  );
}
