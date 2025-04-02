import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { Sidebar } from "./components/Sidebar";
import { NoProjectSelected } from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddNewProjectClick = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return { ...prevState, projects: [...prevState.projects, newProject], selectedProjectId: undefined };
    });
  }

  function handleCancelClick() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((f) => f.id !== prevState.selectedProjectId),
      };
    });
  };

  let selectedProject = projectsState?.projects?.find((f) => f.id === projectsState.selectedProjectId);
  return (
    <main className="flex gap-8 items-end h-screen">
      <Sidebar
        projects={projectsState.projects}
        onAddClick={handleAddNewProjectClick}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />

      {projectsState.selectedProjectId === null && <NewProject onAdd={handleAddProject} onCancel={handleCancelClick} />}
      {projectsState.selectedProjectId === undefined && <NoProjectSelected onAddClick={handleAddNewProjectClick} />}
      {selectedProject && <SelectedProject project={selectedProject} onDeleteProjectClick={handleDeleteProject} />}
    </main>
  );
}

export default App;
