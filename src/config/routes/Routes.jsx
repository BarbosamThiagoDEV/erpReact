import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, Text } from "react-native";
import Login from "../screen/Login/Login";
// import Login from "../screen/Login/Login";

export default function Routes() {
  const Tab = createBottomTabNavigator();
  console.log({ Tab });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>teste04</Text>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
        {/* <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
        > */}
        {/* <Tab.Screen name="Login" component={Login} /> */}
        {/* </Tab.Navigator> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
