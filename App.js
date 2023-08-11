import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailPage from "./src/screens/RestaurantDetailPage";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen></HomeScreen> */}
      <RestaurantDetailPage></RestaurantDetailPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
