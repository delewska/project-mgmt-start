import React from "react";
import { useState } from "react";

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState();

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <div className="flex item-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button
        className="text-stone-700 hover:text-stone-950"
        onChange={handleChange}
        value={enteredTask}
      >
        Add Task
      </button>
    </div>
  );
}
