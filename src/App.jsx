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
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddNewProject={handleAddNewProject} />
      <EntryPage onAddNewProject={handleAddNewProject} />
    </main>
  );
}

export default App;
