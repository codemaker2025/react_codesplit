/* eslint-disable react/prop-types */
export default function TaskList({ todos }) {
  console.log("TaskList");
  
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
