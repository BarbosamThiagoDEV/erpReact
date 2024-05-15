import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/config/routes/Routes";
// import Routes from "./src/config/routes/Routes";

export default function App() {
  return (
    // <Text>App Teste</Text>
    // <View style={styles.container}>
    <Routes />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
