import React from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../context";

export default class AppScreen extends React.Component {
  static contextType = AuthContext;
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome in App</Text>
        <Text onPress={() => this.context.signOut()}>Logout</Text>
      </View>
    );
  }
}
