import React from "react";
import { Text, View } from "react-native";

export default class ForgotPasswordScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Forgot password</Text>
        <Text>Forgot Password is not supported in this version of app.</Text>
        <Text onPress={() => this.props.navigation.navigate("Login")}>
          Go Back to Login
        </Text>
      </View>
    );
  }
}
