import { View, Text, Image } from "react-native";
import React from "react";
import Separator from "../Separator";

export default function OrderListItem({ order }) {
  return (
    <View
      style={{ flexDirection: "row", marginBottom: 15, alignItems: "center" }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 100, height: 100 }}
      ></Image>
      <View style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ fontSize: 14, color: "grey", marginVertical: 13 }}>
          3 items &#8226; $38.54
        </Text>
        <Text style={{ fontSize: 14, color: "grey" }}>
          2 days ago &#8226; {order.status}
        </Text>
        <Separator></Separator>
      </View>
    </View>
  );
}
