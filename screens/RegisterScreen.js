import React from "react";
import { Text, View } from "react-native";

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Register Screen</Text>
        <Text onPress={() => this.props.navigation.navigate("Login")}>
          Go Back to Login
        </Text>
      </View>
    );
  }
}
