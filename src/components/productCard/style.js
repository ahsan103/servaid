import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
  },
  image: {
    height: 200,
    width: 150,
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 10,
  },
  price: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 16,
    color: "#127cc0",
    fontWeight: "bold",
  },
  button: {
    alignSelf: "flex-end",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 360,
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
