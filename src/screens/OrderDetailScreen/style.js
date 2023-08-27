import { StyleSheet } from "react-native";

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
    fontSize: 30,
    fontWeight: "600",
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 15,
    color: "grey",
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: "grey",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
  },
});
