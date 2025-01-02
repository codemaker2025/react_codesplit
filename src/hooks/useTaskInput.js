import { useState } from "react";

export default function useTaskInput(initialValue = { id: "", text: "" }) {
  const [item, setItem] = useState(initialValue);

  function resetInput() {
    setItem(initialValue);
  }

  function handleChange(e) {
    const { value } = e.target;
    setItem((prev) => ({
      ...prev,
      text: value,
    }));
  }

  return { item, setItem, handleChange, resetInput };
}
