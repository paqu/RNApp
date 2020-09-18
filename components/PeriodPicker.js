import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const monthNumToName = (num) => {
  let monthName;
  switch (num) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
    default:
      alert(num);
      break;
  }
  return monthName;
};

const PeriodPicker = (props) => {
  const [month, setMonth] = useState(new Date(Date.now()).getMonth());
  const [year, setYear] = useState(new Date(Date.now()).getFullYear());
  const { container, dateView, dateText } = styles;

  const onPressLeft = () => {
    let newMonth = month - 1;
    if (newMonth < 0) {
      newMonth = 11;
      setYear(year - 1);
    }
    setMonth(newMonth);
  };

  const onPressRight = () => {
    let newMonth;

    if (month == new Date(Date.now()).getMonth()) return;

    newMonth = month + 1;
    if (newMonth > 11) {
      newMonth = 0;
      setYear(year + 1);
    }
    setMonth(newMonth);
  };

  return (
    <View style={container}>
      <TouchableOpacity style={styles.button} onPress={onPressLeft}>
        <FontAwesome5 name="less-than" size={18} color={colors.GRAY} />
      </TouchableOpacity>
      <View style={dateView}>
        <Text style={dateText}>
          {monthNumToName(month)}, {year}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressRight}>
        <FontAwesome5 name="greater-than" size={18} color={colors.GRAY} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 5,
    marginBottom: 20,
    height: 30,
  },
  dateView: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    marginLeft: 10,
    marginRight: 10,
  },
  dateText: {
    fontWeight: "bold",
    color: colors.GRAY,
  },
  button: {
    justifyContent: "center",
  },
});

export default PeriodPicker;
