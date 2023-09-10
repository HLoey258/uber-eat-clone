import { View, Text, FlatList } from "react-native";
import React from "react";

import order from "../../../assets/data/orders.json";
import OrderListItem from "../../components/OrderListItem/OrderListItem";

export default function OrderList() {
  return (
    <View
      style={{ flex: 1, width: "100%", paddingTop: 15, paddingHorizontal: 5 }}
    >
      <FlatList
        data={order}
        renderItem={({ item }) => <OrderListItem order={item}></OrderListItem>}
      ></FlatList>
    </View>
  );
}
