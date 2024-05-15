import { StyleSheet, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  colorFour,
  colorOne,
  colorThree,
  colorTwo,
} from "../../default/colorDefault";

export default function Login() {
  return (
    <View style={styles.view1}>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.view2}>
          <AntDesign name="google" size={30} color={"black"} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.txt}>Continuar com o google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: "center",
    JustifyContent: "center",
    widht: "100%",
    backgroundColor: colorThree,
  },
  view2: {
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorFour,
  },
  view3: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorOne,
  },
  touch: {
    width: 300,
    height: 50,
    flexDirection: "row",
    JustifyContent: "center",
    backgroundColor: colorTwo,
  },
  txt: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "monoSpace",
    fontWeight: "bold",
    color: "black",
  },
});
