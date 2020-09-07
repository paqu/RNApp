import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "../Firebase";
export const AuthContext = createContext();

const initialAuthState = {
  isLoading: true,
  isSignOut: false,
  user: null,
};

const authReducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_USER":
      console.log(`Restore user: ${action.user}`);
      return {
        ...prevState,
        user: action.user,
        isLoading: false,
      };
    case "SIGN_IN":
      console.log(`Sign in with user: ${action.user}`);
      return {
        ...prevState,
        isSignOut: false,
        user: action.user,
      };
    case "SIGN_OUT":
      console.log("sign out");
      return {
        ...prevState,
        isSignOut: true,
        user: null,
      };
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);
  const auth = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        console.log(`Data passed: ${email}, ${password}`);
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        try {
          let { user } = await firebase.signIn(email, password);
          await AsyncStorage.setItem("user", JSON.stringify(user));
          dispatch({ type: "SIGN_IN", user: user });
        } catch (e) {
          alert(e);
          console.log(e);
        }
      },
      signOut: async () => {
        try {
          await firebase.signOut();
          await AsyncStorage.removeItem("user");
        } catch (e) {
          alert(e);
          console.log(e);
        }
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (email, password) => {
        console.log(`Email ${email}, password: ${password}`);

        try {
          let { user } = await firebase.signUp(email, password);
          await AsyncStorage.setItem("user", JSON.stringify(user));
          dispatch({ type: "SIGN_IN", user: user });
        } catch (e) {
          alert(e);
          console.log(e);
        }
      },
      getUser: () => {
        return authState.user;
      },
      setUser: (user) => {
        dispatch({ type: "RESTORE_USER", user: user });
      },
    }),
    [authState]
  );
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
