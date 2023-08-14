import { StyleSheet } from "react-native";
// using for all files in RestaurantDetailPage folder
export default StyleSheet.create({
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
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 20,
  },
});
