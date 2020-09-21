import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

import CategoriesList from "../components/CategoriesList";
import PeriodPicker from "../components/PeriodPicker";
import BudgetSummary from "../components/BudgetSummary";

import { groupByCreator } from "../utils";
import { connect } from "react-redux";

const groupByCategory = groupByCreator("category");

const getCurValForCategory = (grouped) => {
  return Object.entries(grouped).map(([id, arr]) => ({
    category: id,
    curVal: arr.reduce((acc, cv) => (acc += parseInt(cv.amount)), 0),
  }));
};

const updateCurValForCategory = (curValArr, categories) => {
  let result = [];

  for (let i = 0; i < curValArr.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      if (curValArr[i].category === categories[j].name) {
        console.log("current value: " + curValArr[i].curVal);
        result.push({ ...categories[j], currentVal: curValArr[i].curVal });
      }
    }
  }
  console.log(result);
  return result;
};
const categories = [
  {
    id: 1,
    name: "Health",
    currentVal: 0,
    limit: 200,
    color: "red",
  },
  {
    id: 2,
    name: "Fun",
    currentVal: 0,
    limit: 100,
    color: "green",
  },
  {
    id: 3,
    name: "Travel",
    currentVal: 0,
    limit: 150,
    color: "orange",
  },
  {
    id: 4,
    name: "Food",
    currentVal: 0,
    limit: 1000,
    color: "blue",
  },
  {
    id: 5,
    name: "Shopping",
    currentVal: 0,
    limit: 75,
    color: "purple",
  },
  {
    id: 6,
    name: "Transport",
    currentVal: 0,
    limit: 150,
    color: "brown",
  },
  {
    id: 7,
    name: "Bills",
    currentVal: 0,
    limit: 600,
    color: "pink",
  },
  {
    id: 8,
    name: "Other",
    currentVal: 0,
    limit: 200,
    color: "black",
  },
];

class ReportsScreen extends React.Component {
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
          <Card.Title>Reports</Card.Title>
          <Card.Divider />
          <PeriodPicker />
          <Card.Divider />
          <BudgetSummary />
          <Card.Divider />
          <CategoriesList
            categories={updateCurValForCategory(
              getCurValForCategory(groupByCategory(this.props.transactions)),
              categories
            )}
          />
        </Card>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transactionsReducer.transactions,
});

export default connect(mapStateToProps, null)(ReportsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
