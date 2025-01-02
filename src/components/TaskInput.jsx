/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [item, setItem] = useState({
    id: "",
    text: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (item.text.trim()) {
      onAddTask(item);
      setItem({
        id: "",
        text: "",
      });
    }
  }
  console.log("TaskInput");
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={item.text}
        onChange={(e) =>
          setItem((prevItem) => ({
            ...prevItem,
            text: e.target.value,
          }))
        }
        placeholder="Add a task"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
