import { View, Text, FlatList } from "react-native";
import React from "react";

import order from "../../../assets/data/orders.json";
import OrderListItem from "../../components/OrderListItem/OrderListItem";

export default function OrderLish() {
  return (
    <View>
      <FlatList
        data={order}
        renderItem={({ item }) => <OrderListItem order={item}></OrderListItem>}
      ></FlatList>
    </View>
  );
}
