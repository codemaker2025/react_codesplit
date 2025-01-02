import useTodos from "../hooks/useTodos";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useState } from "react";
import ConfirmModal from "./Modal/ConfirmModal";

export default function Task() {
  const { addTodo, todos, removeTodo } = useTodos();
  const [showModal, setShowModal] = useState(false);
  function handleAddTask(newTask) {
    const status = addTodo(newTask);
    if (status === "empty" || status === "duplicate") {
      setShowModal(true);
      // alert(status)
    }
    console.log(status);
  }
  
  function handleModal() {
    setShowModal((prev) => !prev);
  }
  console.log("Task");

  return (
    <div>
      <div>
        <h1>Task Manager</h1>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList todos={todos} removeTodo={removeTodo} />
      </div>
      <div>{showModal && <ConfirmModal handleModal={handleModal} />}</div>
    </div>
  );
}
