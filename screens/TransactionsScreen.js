import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import colors from "../config/colors";
import PeriodPicker from "../components/PeriodPicker";
import TransactionsList from "../components/TransactionsList";

class TransactionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: "96%",
            borderRadius: 10,
            flexGrow: 1,
          }}
        >
          <Card.Title>Transactions</Card.Title>
          <Card.Divider />
          <PeriodPicker />
          <Card.Divider />
          <Button
            buttonStyle={{
              backgroundColor: colors.GREEN,
            }}
            icon={<FontAwesome name="plus-square-o" size={24} color="white" />}
            iconRight
            title="Add new transaction "
            onPress={() =>
              this.props.navigation.navigate("TransactionDetails", {
                title: "New transaction",
              })
            }
            titleStyle={{
              marginRight: 20,
            }}
          />
          <Card.Divider />
          <TransactionsList transactions={this.props.transactions} />
        </Card>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps, null)(TransactionsScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
