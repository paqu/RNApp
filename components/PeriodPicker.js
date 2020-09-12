import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
const PeriodPicker = (props) => {
  const { container, date } = styles;
  return (
    <View style={container}>
      <FontAwesome5 name="less-than" size={18} color={colors.GRAY} />
      <Text style={date}> September, 2020</Text>
      <FontAwesome5 name="greater-than" size={18} color={colors.GRAY} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  date: {
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
    color: colors.GRAY,
  },
});

export default PeriodPicker;
