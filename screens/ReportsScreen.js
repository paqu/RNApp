import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

export default class ReportsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: "96%",
            borderRadius: 10,
            flexGrow: 0.98,
          }}
        >
          <Card.Title>Reports</Card.Title>
          <Card.Divider />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
