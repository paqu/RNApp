import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TransactionsScreen from "../screens/TransactionsScreen";
import TransactionDetailsScreen from "../screens/TransactionDetailsScreen";

const Stack = createStackNavigator();

const TransactionsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default TransactionsNavigation;
