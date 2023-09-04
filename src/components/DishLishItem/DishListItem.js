import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function DishListItem({ dish }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Dish")}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {/* ...&&... JSX style - Condition before && and then the value returned */}
      {dish.image && (
        <Image style={styles.image} source={{ uri: dish.image }}></Image>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingBottom: 15,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  description: {
    fontSize: 14,
    color: "grey",
  },
  price: {
    fontSize: 14,
    color: "black",
  },
  image: {
    height: 90,
    aspectRatio: 1,
  },
});
