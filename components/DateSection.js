import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const DateSection = (props) => {
  const { title } = props;
  return (
    <View style={styles.row}>
      <Ionicons
        name="md-calendar"
        size={18}
        color={colors.GRAY}
        style={styles.icon}
      />
      <Text style={styles.date}> {title} </Text>
    </View>
  );
};

export default DateSection;

const styles = StyleSheet.create({
  row: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  date: {
    color: colors.GRAY,
  },
});
