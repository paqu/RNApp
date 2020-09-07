import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext();

const initialAuthState = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
};

const authReducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      console.log(`Restore token: ${action.token}`);
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      console.log(`Sign in with token: ${action.token}`);
      return {
        ...prevState,
        isSignOut: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      console.log("sign out");
      return {
        ...prevState,
        isSignOut: true,
        userToken: null,
      };
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);
  const auth = React.useMemo(
    () => ({
      signIn: async (data) => {
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
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
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
      getUser: () => {
        return authState.userToken;
      },
      setUser: (token) => {
        dispatch({ type: "RESTORE_TOKEN", token: token });
      },
    }),
    [authState]
  );
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
