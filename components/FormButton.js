import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

class FormButton extends React.Component {
  render() {
    const { disabled, label, onPress } = this.props;
    const containerStyle = [
      styles.container,
      disabled ? styles.containerDisabled : styles.containerEnabled,
    ];
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: colors.WHITE,
    backgroundColor: colors.GREEN,
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,

    shadowColor: "rgba(108, 189, 126, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  containerEnabled: {
    opacity: 1,
  },
  containerDisabled: {
    opacity: 0.3,
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20,
  },
});

export default FormButton;
