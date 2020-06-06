import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import InputTextField from "../components/InputTextField";
import colors from "../config/colors";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              marginTop: 60,
              marginBottom: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../assets/logo.png")} />
            <Text
              style={[
                styles.text,
                { marginTop: 10, fontSize: 22, fontWeight: "500" },
              ]}
            >
              myBudget
            </Text>
          </View>

          <InputTextField style={styles.inputTitle} title="Email" />
          <InputTextField
            style={{
              marginTop: 32,
              marginBottom: 8,
            }}
            title="Password"
            isSecure={true}
          />
          <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
            Forgot Password?
          </Text>
          <TouchableOpacity style={styles.submitContainer}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.WHITE,
                  fontWeight: "600",
                  fontSize: 16,
                },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: colors.GRAY,
                textAlign: "center",
                marginTop: 24,
              },
            ]}
          >
            Don't have an account?{" "}
            <Text style={[styles.text, styles.link]}>Register Now</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: "Avenir Next",
    color: colors.DARK,
  },
  link: {
    color: colors.GREEN,
    fontSize: 14,
    fontWeight: "500",
  },
  submitContainer: {
    backgroundColor: colors.GREEN,
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    color: colors.WHITE,
    shadowColor: "rgba(108, 189, 126, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
});
