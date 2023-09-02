import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function RestaurantItem({ restaurant }) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id }); // the second parameter is id
  };
  return (
    <Pressable onPress={handlePress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      ></Image>
      <View style={styles.row}>
        <View style={styles.restaurantDetail}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            $$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
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
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  restaurantDetail: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
