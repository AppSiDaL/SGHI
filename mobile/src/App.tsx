import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Piezas from "./screens/piezas/Index";
import Scanner from "./screens/qrScaner/index";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Piezas" component={Piezas} />
        <Stack.Screen name="Scanner" component={Scanner} />
        {/* Add more routes here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
