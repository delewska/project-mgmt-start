import React from "react";

import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import EntryPage from "./components/EntryPage.jsx";

function App() {
const [projectsState, setProjectsState] = React.useState({
  selectedProjectId: undefined,
  projects: []
})

const handleAddNewProject = () => {
  setProjectsState(prevState => {
  return {
    ...prevState,
    selectedProjectId: null,
    };
  });
}

  const handleAddProject = (projectData) => {
  setProjectsState(prevState => {
    const newProject = {
      ...projectsData,
      id: Math.random()
    }
    return {
      ...prevState,
      projects: [...prevState.projects, newProject]
    }
  }
  }

let content; 

  if(projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if(projectsState.selectedProjectId === undefined) {
    content = <EntryPage onAddNewProject={handleAddNewProject} />
  };
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddNewProject={handleAddNewProject} />
      {content}
    </main>
  );
}

export default App;
