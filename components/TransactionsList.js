import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import DateSection from "./DateSection";

import Transaction from "./Transaction";

const initState = [
  {
    date: new Date(Date.now()),
    category: "Fun",
    title: "SQ",
    amount: 20,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "SQ",
    amount: 20,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "Cinema",
    amount: 120,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 13),
    category: "Fun",
    title: "Tickets to theatre",
    amount: 23,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 12),
    category: "Food",
    title: "Lunch",
    amount: 55,
    type: "income",
  },
  {
    date: new Date(2020, 8, 10),
    category: "Health",
    title: "Doctor visit",
    amount: 200,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Food",
    title: "Shopping",
    amount: 23,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "income",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Food",
    title: "Shopping",
    amount: 23,
    type: "expense",
  },

  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  } /*
  {
    date: new Date(2020, 8, 9),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 8),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 8),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 8),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 8),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 8),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 6),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 8),
    category: "Food",
    title: "MC Donald",
    amount: 19,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 7),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  },
  {
    date: new Date(2020, 8, 7),
    category: "Bills",
    title: "Internet Bills",
    amount: 69,
    type: "expense",
  }, */,
  ,
  ,
  ,
  ,
  {
    date: new Date(2020, 8, 7),
    category: "Food",
    title: "MC Donald",
    amount: 19,
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
/*
      <Text style={styles.header}>History</Text>
      {groupByDate(initState.map(mapper)).map((transaction) => {
        return <DateSection date={transaction} />;
      })}

      */
const dateSort = (a, b) => b.date - a.date;
const DATA = toTitleData(groupByDate(initState.sort(dateSort).map(dateMapper)));

const Item = ({ transaction }) => {
  return (
    <View style={styles.item}>
      <Text> transaction </Text>
    </View>
  );
};

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
