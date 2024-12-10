import React from "react";

import Button from "./Button.jsx";
import noProjects from "../assets/no-projects.png";

export default function EntryPage({onAddNewProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjects}
        alt="image of notebook with pen"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddNewProject}>Create new project</Button>
      </p>
    </div>
  );
}
