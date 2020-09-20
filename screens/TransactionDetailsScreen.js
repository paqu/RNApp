import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import ExpenseForm from "../components/ExpenseForm";

import { useDispatch } from "react-redux";

import { addTransaction, updateTransaction } from "../store/actionTypes";

const TransactionDetailsScreen = (props) => {
  const dispatch = useDispatch();
  const { route } = props;
  const title = route.params.title;
  const type = route.params.type;
  const transaction =
    type === "add"
      ? {
          //id: null,
          amount: 0,
          date: new Date(Date.now()),
          title: "",
          category: "Choose category",
          type: "expense",
        }
      : route.params.transaction;

  const onSave = (id, transaction) => {
    if (id === undefined) {
      console.log("ADD");
      dispatch(addTransaction(transaction));
    } else {
      console.log("UPDATE");
      dispatch(updateTransaction(id, transaction));
    }
  };
  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: "96%",
          borderRadius: 10,
          flexGrow: 1,
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <ExpenseForm transaction={transaction} onSave={onSave} />
      </Card>
    </View>
  );
};
export default TransactionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
