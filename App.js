import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);
  const [isAddMod, setIsAddMod] = useState(false);
  const todoInputHandler = (enteredText) => {
    setTodo(enteredText);
  };

  const addTodo = () => {
    setAllTodo((currentTodos) => [
      ...allTodo,
      { id: Math.random().toString(), value: todo },
    ]);
    setIsAddMod(false);
    setTodo("");
  };

  const onDelete = (todoId) => {
    setAllTodo((currentTodos) => {
      return currentTodos.filter((i) => i.id !== todoId);
    });
  };
  const cancelTodo = () => {
    setIsAddMod(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="add new todo" onPress={() => setIsAddMod(true)} />
      <TodoInput
        isAddMod={isAddMod}
        todoInputHandler={todoInputHandler}
        addTodo={addTodo}
        todo={todo}
        cancelTodo={cancelTodo}
      />
      <FlatList
        data={allTodo}
        renderItem={(itemData) => (
          <TodoItem
            itemData={itemData}
            onDelete={onDelete.bind(this, itemData.item.id)}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
