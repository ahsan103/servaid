import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  container: {
    width: 150,
    flexDirection: "row",
    backgroundColor: "#b1e3fa",
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#127cc0",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 360,
    margin: 5,
  },
  qtyView: {
    width: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#127cc0",
    alignSelf: "center",
  },
});

export default styles;
