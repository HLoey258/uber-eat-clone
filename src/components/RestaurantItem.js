import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function RestaurantItem({ restaurants }) {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurants.image,
        }}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>{restaurants.name}</Text>
      <Text style={styles.subtitle}>
        $$ {restaurants.deliveryFee} &#8226; {restaurants.minDeliveryTime} -
        {restaurants.maxDeliveryTime} minutes
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    marginVertical: 2,
    fontSize: 17,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 13,
    color: "grey",
  },
});
