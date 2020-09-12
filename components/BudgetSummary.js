import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const BudgetSummary = (props) => {
  const income = 1000;
  const expense = 800;
  const balance = income - expense;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Income</Text>
        <Text style={[styles.value, styles.green]}>+{income} PLN </Text>
      </View>
      <View style={styles.separator}></View>
      <View>
        <Text style={styles.title}>Expense</Text>
        <Text style={[styles.value, styles.red]}> -{expense} PLN </Text>
      </View>
      <View style={styles.separator}></View>
      <View>
        <Text style={styles.title}>Balance</Text>
        <Text style={[styles.value, styles.green]}>+{balance} PLN </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  value: {
    fontSize: 14,
    textAlign: "center",
    padding: 5,
  },
  red: {
    color: colors.TORCH_RED,
  },
  green: {
    color: colors.GREEN,
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: "#dedede",
  },
});

export default BudgetSummary;
