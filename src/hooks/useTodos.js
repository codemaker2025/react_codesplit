import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTodos() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  
  const addTodo = useCallback(
    (todo) => {
      if (!todo.text.trim()) {
        console.error("FIELD IS EMPTY");
        return "empty";
      }

      if (todos.some((ele) => ele.text === todo.text.trim())) {
        console.error("DUPLICATE TEXT DETECTED");
        return "duplicate";
      }

      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: todo.text.trim() },
      ]);
      return "success";
    },
    [todos, setTodos]
  );

  const removeTodo = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );

  return { todos, addTodo, removeTodo };
}
