import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import DateSection from "./DateSection";

import Transaction from "./Transaction";

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

const TransactionsList = (props) => {
  const { transactions, onRemove } = props;
  return (
    <View style={styles.container}>
      <SectionList
        sections={toTitleData(
          groupByDate(transactions.sort(dateSort).map(dateMapper))
        )}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <Transaction transaction={item} index={index} onRemove={onRemove} />
        )}
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
