import React from "react";
import { TextInput, Button, StyleSheet, View, Modal } from "react-native";

const TodoInput = ({
  todoInputHandler,
  addTodo,
  todo,
  isAddMod,
  cancelTodo,
}) => {
  return (
    <Modal visible={isAddMod} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter todo"
          style={styles.input}
          onChangeText={todoInputHandler}
          value={todo}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addTodo} color="green" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelTodo} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default TodoInput;
