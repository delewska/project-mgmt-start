import React from "react";

import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import EntryPage from "./components/EntryPage.jsx";

function App() {
  const [projectsState, setProjectsState] = React.useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddNewProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log("projectData: ", projectData);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <EntryPage onAddNewProject={handleAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddNewProject={handleAddNewProject}
        projcts={projectsStates.projects}
      />
      {content}
    </main>
  );
}

export default App;
