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

import { AuthContext } from "../context";

export default class RegisterScreen extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      nameTouched: false,
      emailTouched: false,
      passwordTouched: false,
    };
  }
  emailInputRef = React.createRef();
  passwordInputRef = React.createRef();
  handleNameChange = (name) => {
    this.setState({ name: name });
  };
  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleNameSubmitPress = () => {
    if (this.emailInputRef.current) {
      this.emailInputRef.current.focus();
    }
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };
  handleNameBlur = () => {
    this.setState({ nameTouched: true });
  };

  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };
  handleSignUpPress = () => {
    console.log("Register button pressed");
    this.context.signUp(this.email, this.password);
  };

  render() {
    const {
      name,
      email,
      password,
      nameTouched,
      emailTouched,
      passwordTouched,
    } = this.state;
    const nameError = !name && nameTouched ? strings.NAME_REQUIRED : undefined;
    const emailError =
      !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;
    const passwordError =
      !password && passwordTouched ? strings.PASSWORD_REQUIRED : undefined;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text
          style={[
            styles.text,
            {
              marginTop: 50,
              marginBottom: 20,
              fontSize: 22,
              fontWeight: "500",
            },
          ]}
        >
          Create account
        </Text>

        <View style={styles.form}>
          <FormTextInput
            title={strings.NAME_TITLE}
            value={this.state.name}
            onChangeText={this.handleNameChange}
            onSubmitEditing={this.handleNameSubmitPress}
            autoCorrect={false}
            autoCapitalize={"none"}
            returnKeyType="next"
            onBlur={this.handleNameBlur}
            error={nameError}
          />
          <FormTextInput
            title={strings.LOGIN_TITLE}
            ref={this.emailInputRef}
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

          <FormButton
            label={strings.SIGNUP}
            onPress={this.handleSignUpPress}
            disabled={!name || !email || !password}
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
            Already have account?{" "}
            <Text
              style={[styles.text, styles.link]}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              {strings.LOGIN}
            </Text>
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
    justifyContent: "center",
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
