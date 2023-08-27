import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
import orders from "../../../assets/data/orders.json";
const order = orders[0];

export default function OrderDetailHeader() {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: order.Restaurant.image,
        }}
        style={styles.image}
      ></Image>
      {/* <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={35}
          color={"white"}
          style={styles.imageIcon}
        ></Ionicons>
      </View> */}
      <View style={styles.container}>
        <View style={styles.restaurantDetail}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text>Your Items</Text>
        </View>
      </View>
    </View>
  );
}
