import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colors from "../config/colors";

export default class InputTextField extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.inputTitle}>{this.props.title}</Text>
        <TextInput
          placeholder={this.props.placeholderText}
          secureTextEntry={this.props.isSecure}
          style={styles.input}
        />
        <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTitle: {
    color: colors.GRAY,

    fontSize: 14,
  },
  input: {
    paddingVertical: 12,
    color: colors.DARK,
    fontSize: 14,
    fontFamily: "Avenir Next",
  },
});
