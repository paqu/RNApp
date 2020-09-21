import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Category from "./Category";

const CategoriesList = (props) => {
  const { categories } = props;
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
