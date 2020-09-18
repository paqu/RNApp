import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import DateSection from "./DateSection";

import Transaction from "./Transaction";

const initState = [
  {
    id: 1,
    date: new Date(Date.now()),
    category: "Fun",
    title: "SQ",
    amount: 20,
    type: "expense",
  },
  {
    id: 2,
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "SQ",
    amount: 20,
    type: "expense",
  },
  {
    id: 3,
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "Cinema",
    amount: 120,
    type: "expense",
  },
  {
    id: 4,
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "Tickets to theatre",
    amount: 23,
    type: "expense",
  },
  {
    id: 5,
    date: new Date(2020, 8, 12),
    category: "Food",
    title: "Lunch",
    amount: 55,
    type: "income",
  },
  {
    id: 6,
    date: new Date(2020, 8, 10),
    category: "Health",
    title: "Doctor visit",
    amount: 200,
    type: "expense",
  },
  {
    id: 7,
    date: new Date(2020, 8, 9),
    category: "Food",
    title: "Shopping",
    amount: 23,
    type: "expense",
  },
  {
    id: 8,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    id: 9,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "income",
  },
  {
    id: 10,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    id: 11,
    date: new Date(2020, 8, 9),
    category: "Food",
    title: "Shopping",
    amount: 23,
    type: "expense",
  },

  {
    id: 12,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    id: 13,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    id: 14,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    id: 15,
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
];
const splitDate = (date) => {
  return {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};

const dateMapper = (entry) => {
  const { date, month, year } = splitDate(entry.date);
  return {
    ...entry,
    dayDateMonthYear: new Date(year, month, date).toDateString(),
  };
};

const groupByCreator = (key) => (array) =>
  array.reduce(
    (objectsByKeyValue, obj) => ({
      ...objectsByKeyValue,
      [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
    }),
    {}
  );

const groupByDate = groupByCreator("dayDateMonthYear");

const toTitleData = (input) =>
  Object.entries(input).map(([title, data]) => ({
    title: title,
    data: data,
  }));

const dateSort = (a, b) => b.date - a.date;
const DATA = toTitleData(groupByDate(initState.sort(dateSort).map(dateMapper)));

const TransactionsList = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Transaction transaction={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <DateSection title={title} />
        )}
      />
    </View>
  );
};

export default TransactionsList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 500,
  },
  header: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 5,
  },
});
