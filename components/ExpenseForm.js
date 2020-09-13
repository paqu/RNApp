import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const ExpenseForm = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Type</Text>
        <ButtonGroup
          onPress={setSelectedIndex}
          selectedIndex={selectedIndex}
          buttons={["Expense", "Income"]}
          buttonStyle={{ backgroundColor: colors.WHITE }}
          selectedButtonStyle={{ backgroundColor: colors.GREEN }}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Category</Text>
        <View style={styles.input}>
          <Text>Fun</Text>
          <Ionicons name="md-arrow-dropdown" size={24} color="#dedede" />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Title</Text>
        <View style={styles.input}>
          <Text>Type something...</Text>
          {/* temp workaround */}
          <Ionicons name="md-calendar" size={24} color="white" />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Amount</Text>
        <View style={styles.input}>
          <Text>Enter amount</Text>
          {/* temp workaround */}
          <Ionicons name="md-calendar" size={24} color="white" />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Date</Text>
        <View style={styles.input}>
          <Text>DD/MM/YYYY</Text>
          <Ionicons name="md-calendar" size={24} color="#dedede" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.GRAY,
    padding: 10,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#dedede", //colors.GREEN,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default ExpenseForm;