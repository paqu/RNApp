import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Category from "./Category";

const categories = [
  {
    id: 1,
    name: "Health",
    currentVal: 123,
    limit: 200,
    color: "red",
  },
  {
    id: 2,
    name: "Fun",
    currentVal: 150,
    limit: 100,
    color: "green",
  },
  {
    id: 3,
    name: "Travel",
    currentVal: 10,
    limit: 150,
    color: "orange",
  },
  {
    id: 4,
    name: "Food",
    currentVal: 729,
    limit: 1000,
    color: "blue",
  },
  {
    id: 5,
    name: "Shopping",
    currentVal: 150,
    limit: 75,
    color: "purple",
  },
  {
    id: 6,
    name: "Transport",
    currentVal: 150,
    limit: 150,
    color: "brown",
  },
  {
    id: 7,
    name: "Bills",
    currentVal: 230,
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
const CategoriesList = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      {categories.map((item) => (
        <Category key={item.id} category={item} />
      ))}
    </ScrollView>
  );
};

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

export default CategoriesList;
