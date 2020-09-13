import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import ExpenseForm from "../components/ExpenseForm";

const TransactionDetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: "96%",
          borderRadius: 10,
          flexGrow: 0.98,
        }}
      >
        <Card.Title>Transaction Details</Card.Title>
        <Card.Divider />
        <ExpenseForm />
        <Card.Divider />
        <Button
          buttonStyle={{
            backgroundColor: colors.GREEN,
            marginBottom: 10,
          }}
          title="Save"
          onPress={() => {}}
          titleStyle={{
            marginRight: 20,
          }}
        />
        <Button
          buttonStyle={{
            backgroundColor: "white",
            borderColor: colors.GREEN,
            borderWidth: 1,
          }}
          title="Cancel"
          onPress={() => props.navigation.goBack()}
          titleStyle={{
            marginRight: 20,
            color: colors.GREEN,
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TransactionDetailsScreen;
