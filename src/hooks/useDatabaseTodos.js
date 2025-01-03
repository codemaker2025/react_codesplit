import { useState, useEffect, useCallback } from "react";

// This will be a mock function simulating a database call.
const fetchTodosFromDB = async () => {
  try {
    const response = await fetch("http://localhost:3000/albinsiju"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    console.log(data,"fetchTodosFromDB");
    
    return data; // Assume the API returns an array of todos
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

const saveTodoToDB = async (todo) => {
  console.log("saveTodoToDB",todo,"is missing");
  
  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo), // Send the todo as JSON in the request body
    });

    if (!response.ok) {
      throw new Error("Failed to save todo");
    }

    const data = await response.json();
    console.log("Todo saved:", data);
  } catch (error) {
    console.error("Error saving todo:", error);
  }
};


const deleteTodoFromDB = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    const data = await response.json();
    console.log("Todo deleted:", data);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export default function useDatabaseTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const fetchedTodos = await fetchTodosFromDB();
      setTodos(fetchedTodos);
    };
    loadTodos();
  }, []);

  const addTodo = useCallback(
    async (todo) => {
      if (!todo.text.trim()) {
        console.error("FIELD IS EMPTY");
        return "empty";
      }

      if (todos.some((ele) => ele.text === todo.text.trim())) {
        console.error("DUPLICATE TEXT DETECTED");
        return "duplicate";
      }

      await saveTodoToDB(todo);
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: todo.text.trim() },
      ]);
      return "success";
    },
    [todos]
  );

  const removeTodo = useCallback(
    async (id) => {
      await deleteTodoFromDB(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    },
    []
  );

  return { todos, addTodo, removeTodo };
}
