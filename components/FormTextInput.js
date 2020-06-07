import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colors from "../config/colors";

export default class FormTextInput extends React.Component {
  textInputRef = React.createRef();

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  render() {
    const { title, ...otherProps } = this.props;
    return (
      <View style={styles.margin}>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput
          ref={this.textInputRef}
          style={styles.input}
          {...otherProps}
        />
        <View style={styles.border} />
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
  margin: {
    marginTop: 32,
    marginBottom: 8,
  },
  border: {
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
  },
});
