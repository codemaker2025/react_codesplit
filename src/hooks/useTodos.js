import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  // Function to add a todo
  function addTodo(todo) {
    if (todo.text.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: todo.text.trim() },
      ]);
    }
  }

  // Function to remove a todo
  function removeTodo(id) {
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
