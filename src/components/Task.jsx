import useTodos from "../hooks/useTodos"
import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"
import { useState } from "react"
import WarningModal from "./Alert/WarningModal"
import useModal from "../hooks/useModal"

export default function Task() {
  const { addTodo, todos, removeTodo } = useTodos()
  const [modalMessage, setModalMessage] = useState("")
  const { isVisible, openModal, closeModal } = useModal()

  function handleAddTask(newTask) {
    const status = addTodo(newTask)
    if (status === "empty" || status === "duplicate") {
      setModalMessage(status === "empty" ? "Task cannot be empty!" : "Task already exists!")
      openModal()
    }
    console.log(status)
  }



  console.log("Task Component Rendered")

  return (
    <div>
      <div>
        <h1>Task Manager</h1>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList todos={todos} removeTodo={removeTodo} />
        <WarningModal closeModal={closeModal} isVisible={isVisible} modalMessage={modalMessage} />
      </div>
    </div>
  )
}
