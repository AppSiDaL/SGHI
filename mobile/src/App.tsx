import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Piezas from "./screens/Piezas/Index";
import Scanner from "./screens/qrScaner/Index";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Piezas"
          component={Piezas}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Scanner"
          component={Scanner}
          options={{ headerShown: false }}
        />
        {/* Add more routes here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;