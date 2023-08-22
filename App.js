import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import RestaurantDetailPage from "./src/screens/RestaurantDetailPage/RestaurantDetailPage";
import { StatusBar } from "expo-status-bar";
import DishDetailScreen from "./src/screens/DishDetailScreen/DishDetailScreen";
import BasketScreen from "./src/screens/BasketScreen/BasketScreen";
import OrderListItem from "./src/components/OrderListItem/OrderListItem";
import OrderLish from "./src/screens/OrderList/OrderLish";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen></HomeScreen> */}
      {/* <RestaurantDetailPage></RestaurantDetailPage> */}
      {/* <DishDetailScreen></DishDetailScreen> */}
      {/* <BasketScreen></BasketScreen> */}
      {/* <OrderListItem></OrderListItem> */}
      <OrderLish></OrderLish>
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
