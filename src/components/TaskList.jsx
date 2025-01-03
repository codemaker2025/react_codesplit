import { useState } from "react";
import { Button } from "react-bootstrap";
import useModal from "../hooks/useModal";
import ConfirmationModal from "./Modal/ConfirmationModal";
/* eslint-disable react/prop-types */

export default function TaskList({ todos, removeTodo }) {
  const { isVisible, openModal, closeModal } = useModal();
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  function handleRemove() {
    if (selectedTodoId !== null) {
      removeTodo(selectedTodoId); // Remove todo with the selected ID
    }
    closeModal();
    setSelectedTodoId(null); // Reset selectedTodoId after removal
  }

  function handleShowModal(id) {
    setSelectedTodoId(id);
    openModal();
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const todoId = todo._id || todo.id; // Check for _id or id
          return (
            <li key={todoId}>
              <div>{todo.text}</div>
              <Button onClick={() => handleShowModal(todoId)} variant="danger">
                Remove
              </Button>
              <ConfirmationModal
                data={todo.text}
                show={isVisible}
                onClose={closeModal}
                handleRemove={handleRemove} // Pass the function without calling it
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
