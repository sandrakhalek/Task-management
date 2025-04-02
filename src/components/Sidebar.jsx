import { Button } from "./Button";

function Sidebar({ projects, onAddClick, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 flex flex-col bg-stone-900 h-[95%] rounded-r-xl pt-20 items-start px-8 gap-y-10 text-stone-500 md:w-72">
      <h2 className="text-stone-200 font-bold uppercase md:text-xl">Your Projects</h2>
      <Button onClick={onAddClick} label={" + Add Project"} />
      <ul className="flex flex-col gap-y-4 w-full items-start">
        {projects?.length > 0 &&
          projects.map((project) => {
            let cssClasses = "w-full p-2 rounded-sm text-start hover:bg-stone-800 hover:text-stone-200";

            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }
            return (
              <li key={project.id} className="w-full">
                <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
                  {project.title}
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}

export { Sidebar };
