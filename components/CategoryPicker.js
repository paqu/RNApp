import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Modal,
  Picker,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CategoryPicker = ({ visible, items, title, onClose, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("Fun");
  return (
    <Modal animated animatedType="fade" transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="close" size={24} color="gray" />
            </TouchableOpacity>
            <Text> {title || "Placeholder"}</Text>
            <TouchableOpacity
              onPress={() => {
                onSelect(selectedValue);
              }}
            >
              <FontAwesome name="check" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(value) => {
              setSelectedValue(value);
            }}
          >
            {items.map((item) => {
              return <Picker.Item value={item} label={item} key={item} />;
            })}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    height: 300,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
});
