import React from "react";

export default function selectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
      TASK
    </div>
  );
}
