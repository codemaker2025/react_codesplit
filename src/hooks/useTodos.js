import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  // Function to add a todo
  function addTodo(todo) {
    console.log(todo);
    
    if (todo.text === "") {
      console.error("FIELD IS EMPTY")
      return "empty"
    }

    const status = todos.some((ele) => ele.text === todo.text)
    if (status) {
      console.error("DUPLICATE TEXT DETECTED")
      return "duplicate"
    }

    if (todo.text.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: todo.text.trim() },
      ]);
      return "success"
    }
  }

  // Function to remove a todo
  function removeTodo(id) {
    console.log(id, "id");
    console.log("Current todos:", todos);

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  // Function to edit a todo
  function editTodo(id, newText) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  }

  return {
    todos,
    addTodo,
    removeTodo,
    editTodo,
  };
}
