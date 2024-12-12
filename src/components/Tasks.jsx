import React from "react";

import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
