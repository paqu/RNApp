import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppScreen from "../screens/AppScreen";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AppScreen} />
    </Stack.Navigator>
  );
}
