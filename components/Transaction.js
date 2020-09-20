import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const setColorBasedOnType = (type) => {
  let color;
  if (type == "expense") {
    color = "red";
  } else {
    color = "green";
  }
  return { borderColor: color, color: color };
};

const setColorBasedOnCategory = (category) => {
  let color;
  if (category == "Health") color = "red";
  else if (category == "Fun") color = "green";
  else if (category == "Travel") color = "orange";
  else if (category == "Food") color = "blue";
  else if (category == "Shopping") color = "purple";
  else if (category == "Transport") color = "brown";
  else if (category == "Bills") color = "pink";
  else color = "black";

  return color;
};

const Transaction = ({ transaction }) => {
  const navigation = useNavigation();
  const { title, category, amount, type } = transaction;
  return (
    <View style={styles.row}>
      <View
        style={[
          styles.colorBlock,
          { backgroundColor: setColorBasedOnCategory(category) },
        ]}
      ></View>
      <Text style={styles.title}>{title} </Text>
      <Text style={[styles.val, setColorBasedOnType(type)]}>
        {type == "income" ? "+" : "-"}
        {amount} PLN
      </Text>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate("TransactionDetails", {
            transaction: JSON.parse(JSON.stringify(transaction)),
            title: "Transaction details",
          });
        }}
      />
      <TouchableOpacity
        onPress={() => alert("remove element: " + transaction.id)}
      >
        <MaterialCommunityIcons
          name="delete-forever-outline"
          size={20}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  colorBlock: {
    width: 10,
    height: 10,
  },
  title: {
    marginLeft: 10,
    flexGrow: 1,
  },
  val: {
    textAlign: "right",
    padding: 5,
  },
});

export default Transaction;
