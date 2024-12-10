import React from "react";

import Sidebar from "./components/Sidebar.jsx";
//delete only to check the EntryPage
import NewProject from "./components/NewProject.jsx";
import EntryPage from "./components/EntryPage.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <EntryPage />
    </main>
  );
}

export default App;
