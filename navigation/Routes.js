import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import { AuthContext } from "../context/AuthProvider";
import Loading from "../components/Loading";
import AsyncStorage from "@react-native-community/async-storage";

export default class Routes extends React.Component {
  static contextType = AuthContext;

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    let userToken;

    try {
      userToken = await AsyncStorage.getItem("userToken");
    } catch (e) {
      console.log("routes: Get token error");
    }
    this.context.setUser(userToken);
    this.setState({ loading: false });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <NavigationContainer>
        {this.context.getUser() ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    );
  }
}
