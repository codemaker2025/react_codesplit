import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage when the component first mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a todo
  function addTodo(todo) {
    console.log(todo);

    if (todo.text === "") {
      console.error("FIELD IS EMPTY");
      return "empty";
    }

    const status = todos.some((ele) => ele.text === todo.text);
    if (status) {
      console.error("DUPLICATE TEXT DETECTED");
      return "duplicate";
    }

    if (todo.text.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: todo.text.trim() },
      ]);
      return "success";
    }
  }

  // Function to remove a todo and update localStorage
  function removeTodo(id) {
    console.log("removeTodo(useTodos hook)");

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // Remove the todo from localStorage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return {
    todos,
    addTodo,
    removeTodo,
  };
}
