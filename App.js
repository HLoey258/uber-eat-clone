import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json";
import { FlatList } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      {/* restaurant item */}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem restaurants={item}></RestaurantItem>
        )}
        showsVerticalScrollIndicator={false} // the disable of scroll
      ></FlatList>
      {/* end restaurant item */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
