import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import RestaurantDetailPage from "./src/screens/RestaurantDetailPage/RestaurantDetailPage";
import { StatusBar } from "expo-status-bar";
import DishDetailScreen from "./src/screens/DishDetailScreen/DishDetailScreen";
import BasketItem from "./src/components/BasketItem/BasketItem";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen></HomeScreen> */}
      {/* <RestaurantDetailPage></RestaurantDetailPage> */}
      {/* <DishDetailScreen></DishDetailScreen> */}
      <BasketItem></BasketItem>
      <StatusBar style="light"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // commit-11
  },
});
