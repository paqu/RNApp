import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

class FormButton extends React.Component {
  render() {
    const { label, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /*
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.GREEN,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)",
   */
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
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20,
  },
});

export default FormButton;
