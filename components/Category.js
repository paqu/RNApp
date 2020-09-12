import React from "react";
import { View, Text, StyleSheet } from "react-native";

const setColor = (val, limit) => {
  const result = val / limit;
  let color;
  if (result <= 0.7) {
    color = "green";
  } else if (result <= 1.0) {
    color = "orange";
  } else {
    color = "red";
  }
  return { borderColor: color, color: color };
};

const Category = (props) => {
  const { name, currentVal, limit, color } = props.category;
  return (
    <View style={styles.catRow}>
      <View style={[styles.catColorBlock, { backgroundColor: color }]}></View>
      <Text style={styles.catName}>{name} </Text>
      <Text style={[styles.catVal, setColor(currentVal, limit)]}>
        {currentVal} of {limit} PLN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  catRow: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  catColorBlock: {
    width: 20,
    height: 20,
  },
  catName: {
    marginLeft: 20,
    flexGrow: 1,
  },
  catVal: {
    fontWeight: "bold",
    textAlign: "right",
    minWidth: 130,
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
  },

  catVal: {
    fontWeight: "bold",
    textAlign: "right",
    minWidth: 130,
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
  },
});

export default Category;
