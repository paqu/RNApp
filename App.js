import React, { useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import Loading from "./components/Loading";
import { NavigationContainer } from "@react-navigation/native";

/* app navigator */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppScreen from "./screens/AppScreen";

const Tabs = createBottomTabNavigator();

const AppNavigation = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Main" component={AppScreen} />
  </Tabs.Navigator>
);

import AuthNavigation from "./navigation/AuthNavigation";
import { AuthContext } from "./context";

export default () => {
  const [loginState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log(`get token: ${userToken}`);
      } catch (e) {
        console.log("Get token error");
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data);
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        try {
          await AsyncStorage.setItem("userToken", "dummy-auth-token");
        } catch (e) {
          console.log("set token error");
        }
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          // remove error
        }

        console.log("Done.");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        console.log(data);

        try {
          await AsyncStorage.setItem("userToken", "dummy-auth-token");
        } catch (e) {
          console.log("set token error");
        }
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  if (loginState.isLoading) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
