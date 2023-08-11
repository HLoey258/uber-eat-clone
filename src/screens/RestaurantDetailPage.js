import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import restaurants from "../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
const restaurant = restaurants[0];
export default function RestaurantDetailPage() {
  return (
    <View style={styles.page}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  page: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  container: {
    paddingHorizontal: 10,
  },
});
