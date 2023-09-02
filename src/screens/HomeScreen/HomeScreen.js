import { StyleSheet, FlatList } from "react-native";
import RestaurantItem from "../../components/RestaurantItem/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";
export default function HomeScreen() {
  return (
    <FlatList
      style={styles.page}
      data={restaurants}
      renderItem={({ item }) => (
        <RestaurantItem restaurant={item}></RestaurantItem>
      )}
      showsVerticalScrollIndicator={false} // the disable of scroll
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
