import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { Sidebar } from "./components/Sidebar";
import { NoProjectSelected } from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddNewProjectClick = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  return (
    <main className="flex gap-8 items-end h-screen">
      <Sidebar projects={projectsState.projects} onAddClick={handleAddNewProjectClick} />
      
      {projectsState.selectedProjectId === null && <NewProject />}
      {projectsState.selectedProjectId === undefined && <NoProjectSelected onAddClick={handleAddNewProjectClick} />}
    </main>
  );
}

export default App;
