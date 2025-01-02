import { useState } from "react"
import { Button } from "react-bootstrap"
import useModal from "../hooks/useModal"
import ConfirmationModal from "./Modal/ConfirmationModal"
/* eslint-disable react/prop-types */
export default function TaskList({ todos, removeTodo }) {
  const { isVisible, openModal, closeModal } = useModal()
  const [selectedTodoId, setSelectedTodoId] = useState(null);
 
  function handleRemove() {
    if (selectedTodoId !== null) {
      removeTodo(selectedTodoId);
    }
    closeModal();
    setSelectedTodoId(null);
  }
  function handleShowModal(id) {
    setSelectedTodoId(id);
    openModal()
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <Button onClick={() => handleShowModal(todo.id)} variant="danger">
              Remove
            </Button>
            <ConfirmationModal
              data={todo.text}
              show={isVisible}
              onClose={closeModal}
              handleRemove={()=>handleRemove(todo.id)}
            />
          </li>
        ))}
      </ul>

    </div>
  )
}
