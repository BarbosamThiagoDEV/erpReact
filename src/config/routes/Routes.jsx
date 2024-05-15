import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Login from "../../screens/login/Login";

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Login" component={""} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}