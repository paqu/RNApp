import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { ButtonGroup, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import CategoryPicker from "./CategoryPicker";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const zeroPad = (num) => {
  let ret = num > 10 ? num : "0" + num;
  return ret;
};

const convertDate = (date) => {
  let ret =
    date.getFullYear() +
    "/" +
    zeroPad(date.getMonth() + 1) +
    "/" +
    zeroPad(date.getDate());
  return ret;
};

const ExpenseForm = (props) => {
  const { transaction } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [category, setCategory] = useState(
    transaction ? transaction.category : "Choose category"
  );
  const [title, setTitle] = useState(transaction ? transaction.title : "");
  const [amount, setAmount] = useState(
    transaction ? transaction.amount.toString() : ""
  );
  const [date, setDate] = useState(
    transaction
      ? convertDate(new Date(transaction.date))
      : convertDate(new Date(Date.now()))
  );

  const [catPickerVisible, setCatPickerVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Type</Text>
          <ButtonGroup
            onPress={setSelectedIndex}
            selectedIndex={selectedIndex}
            buttons={["Expense", "Income"]}
            buttonStyle={{ backgroundColor: colors.WHITE }}
            selectedButtonStyle={{ backgroundColor: colors.GREEN }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Category</Text>
          <TouchableOpacity
            onPress={() => {
              setCatPickerVisible(true);
            }}
            style={styles.input}
          >
            <Text>{category}</Text>
            <Ionicons name="md-arrow-dropdown" size={24} color="#dedede" />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Title</Text>
          <View style={styles.input}>
            <TextInput
              value={title}
              style={{ flex: 1 }}
              placeholder="Enter title"
              onChangeText={(title) => setTitle(title)}
            />
            {/* temp workaround icon should be removed */}
            <Ionicons name="md-calendar" size={24} color="white" />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Amount</Text>
          <View style={styles.input}>
            <TextInput
              style={{ flex: 1 }}
              placeholder={"Enter amount"}
              value={amount}
              keyboardType={"numeric"}
              onChangeText={(amount) => setAmount(amount)}
            />
            {/* temp workaround */}
            <Ionicons name="md-calendar" size={24} color="white" />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Date</Text>
          <View style={styles.input}>
            <TextInput
              style={{ flex: 1 }}
              placeholder={"YYYY/MM/DD"}
              value={date}
              onChangeText={(date) => setDate(date)}
            />
            <Ionicons name="md-calendar" size={24} color="#dedede" />
          </View>
        </View>
        <View style={[styles.row, { marginTop: 20 }]}>
          <Button
            buttonStyle={{
              backgroundColor: colors.GREEN,
              marginBottom: 10,
            }}
            title="Save"
            onPress={() => navigation.navigate("Transactions")}
            titleStyle={{
              marginRight: 20,
            }}
          />
          <Button
            buttonStyle={{
              backgroundColor: "white",
              borderColor: colors.GREEN,
              borderWidth: 1,
            }}
            title="Cancel"
            onPress={() => navigation.goBack()}
            titleStyle={{
              marginRight: 20,
              color: colors.GREEN,
            }}
          />
        </View>
        <CategoryPicker
          value={category}
          visible={catPickerVisible}
          title={"Choose category"}
          items={["Fun", "Health", "Food", "Bills", "Transport"]}
          onClose={() => setCatPickerVisible(false)}
          onSelect={(val) => {
            setCategory(val);
            setCatPickerVisible(false);
          }}
        />
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.GRAY,
    padding: 7,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#dedede", //colors.GREEN,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
  },
});

export default ExpenseForm;
