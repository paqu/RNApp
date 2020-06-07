import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FormTextInput from "../components/FormTextInput";
import FormButton from "../components/FormButton";

import colors from "../config/colors";
import strings from "../config/strings";

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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text
          style={[
            styles.text,
            {
              marginTop: 10,
              marginBottom: 20,
              fontSize: 22,
              fontWeight: "500",
            },
          ]}
        >
          myBudget
        </Text>

        <View style={styles.form}>
          <FormTextInput title={strings.LOGIN_TITLE} />
          <FormTextInput title={strings.PASSWORD} secureTextEntry={true} />

          <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
            Forgot Password?
          </Text>

          <FormButton label={strings.LOGIN} onPress={this.handleLoginPress} />
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
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 30,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
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
});
