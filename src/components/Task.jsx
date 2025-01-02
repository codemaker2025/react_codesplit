import useTodos from "../hooks/useTodos";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Task() {
  const { addTodo, todos } = useTodos();

  function handleAddTask(newTask) {
    addTodo(newTask);
  }
  console.log("Task");
  
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList todos={todos} />
    </div>
  );
}
