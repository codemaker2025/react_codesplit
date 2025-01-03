import { useState } from "react";
import useDatabaseTodos from "../hooks/useDatabaseTodos";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import useModal from "../hooks/useModal";
import WarningModal from "./Alert/WarningModal";

export default function TaskDB() {
  const { todos, addTodo, removeTodo } = useDatabaseTodos();
  const [modalMessage, setModalMessage] = useState("");
  const { isVisible, openModal, closeModal } = useModal();

  async function handleAddTask(newTask) {
    console.log("handleAddTask TaskDB");
    
    const status = await addTodo(newTask);
    if (status === "empty" || status === "duplicate") {
      setModalMessage(
        status === "empty" ? "Task cannot be empty!" : "Task already exists!"
      );
      openModal();
    }
  console.log(status,"status TaskDB");

  }
  
  console.log("TaskDB Component Rendered");
  
  return (
    <div>
      TaskDB
      <TaskInput onAddTask={handleAddTask} />
      <TaskList todos={todos} removeTodo={removeTodo} />
      <WarningModal
        closeModal={closeModal}
        isVisible={isVisible}
        modalMessage={modalMessage}
      />
    </div>
  );
}
