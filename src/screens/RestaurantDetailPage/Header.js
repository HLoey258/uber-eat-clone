import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
export default function Header({ restaurant }) {
  return (
    <View>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      ></Image>
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={35}
          color={"white"}
          style={styles.imageIcon}
        ></Ionicons>
      </View>

      <View style={styles.container}>
        <View style={styles.restaurantDetail}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            $$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
      </View>
      <Text style={styles.headerTitle}>Menu</Text>
    </View>
  );
}
