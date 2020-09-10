import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

import { AuthContext } from "../context/AuthProvider";
import { Avatar, Button } from "react-native-elements";
import { Card } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
export default class SettingsScreen extends React.Component {
  state = {
    userName: "Pawel Kusz",
  };

  static contextType = AuthContext;
  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            width: "96%",
            borderRadius: 10,
            flexGrow: 0.98,
          }}
        >
          <Card.Title>Settings</Card.Title>
          <Card.Divider />
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Avatar
              size="large"
              title="PK"
              rounded
              activeOpacity={0.7}
              containerStyle={{
                backgroundColor: colors.GRAY,
                marginRight: 20,
              }}
            />
            <Text style={{ alignSelf: "center" }}>{this.state.userName}</Text>
          </View>
          <Card.Divider />

          <Button
            buttonStyle={{
              backgroundColor: colors.GREEN,
            }}
            icon={<FontAwesome name="sign-out" size={24} color="white" />}
            iconRight
            title="Logout"
            onPress={() => this.context.signOut()}
            titleStyle={{
              marginRight: 20,
            }}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
