import { useState } from "react";
import { Button } from "react-bootstrap";

/* eslint-disable react/prop-types */
export default function TaskList({ todos, removeTodo }) {
  // const { removeTodo } = useTodos();
  const [showModal, setShowModal] = useState(false);

  console.log("TaskList", todos);
  function handleRemove(id) {
    
    removeTodo(id);
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>{todo.text}</div>
          <Button onClick={() => handleRemove(todo.id)} variant="danger">
            Remove
          </Button>

          {/* <button onClick={() => handleRemove(todo.id)}>delete</button> */}
        </li>
      ))}
    </ul>
  );
}
