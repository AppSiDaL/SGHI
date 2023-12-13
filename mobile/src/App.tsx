import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Piezas from "./screens/Piezas/Index";
import Scanner from "./screens/QrScaner/Index";
import { Ionicons } from "@expo/vector-icons";
import Calculadora from "./screens/Calculadora/Index";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            // Selecciona un icono para cada ruta
            if (route.name === "Piezas") {
              iconName = focused ? "ios-list-circle" : "ios-list";
            } else if (route.name === "Scanner") {
              iconName = focused ? "barcode" : "barcode-outline";
            } else if (route.name === "Calculadora") {
              iconName = focused ? "calculator" : "calculator-outline";
            }

            // Puedes devolver cualquier componente que quieras aquí, incluyendo un icono personalizado.
            // Aquí estamos devolviendo un icono de Ionicons.
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
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
        <Tab.Screen
          name="Calculadora"
          component={Calculadora}
          options={{ headerShown: false }}
        />
        {/* Add more routes here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
