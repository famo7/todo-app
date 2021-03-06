import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const TodoItem = ({ itemData, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.listItems}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
export default TodoItem;
