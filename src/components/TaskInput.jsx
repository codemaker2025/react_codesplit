/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import WarningModal from "./Alert/WarningModal"

export default function TaskInput({ onAddTask }) {
  const [item, setItem] = useState({
    id: "",
    text: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
      onAddTask(item);
      setItem({
        id: "",
        text: "",
      });
  }
  console.log("TaskInput Rendered");

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
      <Button type="submit" variant="primary">
        Add Task
      </Button>
      <WarningModal />

    </form>
  );
}
