import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";
import ReportsScreen from "../screens/ReportsScreen";
import TransactionsScreen from "../screens/TransactionsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (obj) => {
          let { color, size } = obj;
          let iconName;

          if (route.name === "Reports") {
            iconName = "line-chart";
          } else if (route.name === "Settings") {
            iconName = "user-circle";
          } else if (route.name === "Transactions") {
            iconName = "exchange";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.GREEN,
        inactiveTintColor: colors.GRAY,
        style: {
          height: 85,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
