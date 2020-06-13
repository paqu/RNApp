import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import FormTextInput from "../components/FormTextInput";
import FormButton from "../components/FormButton";

import colors from "../config/colors";
import strings from "../config/strings";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailTouched: false,
      passwordTouched: false,
    };
  }
  passwordInputRef = React.createRef();

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };
  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };
  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    const { email, password, emailTouched, passwordTouched } = this.state;
    const emailError =
      !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;
    const passwordError =
      !password && passwordTouched ? strings.PASSWORD_REQUIRED : undefined;
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
          <FormTextInput
            title={strings.LOGIN_TITLE}
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            autoCorrect={false}
            autoCapitalize={"none"}
            keyboardType="email-address"
            returnKeyType="next"
            onBlur={this.handleEmailBlur}
            error={emailError}
          />
          <FormTextInput
            title={strings.PASSWORD_TITLE}
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry={true}
            autoCapitalize={"none"}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
          />

          <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
            Forgot Password?
          </Text>

          <FormButton
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
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
