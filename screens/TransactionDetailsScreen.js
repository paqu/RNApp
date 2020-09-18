import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import ExpenseForm from "../components/ExpenseForm";

const TransactionDetailsScreen = (props) => {
  const { route } = props;
  const title = route.params.title;
  const transaction = route.params.transaction;

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
        <ExpenseForm transaction={transaction} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TransactionDetailsScreen;
