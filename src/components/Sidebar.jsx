import { Button } from "./Button";

function Sidebar({ projects, onAddClick }) {
  return (
    <aside className="w-1/3 flex flex-col bg-stone-900 h-[95%] rounded-r-xl pt-20 items-start px-8 gap-y-10 text-stone-500 md:w-72">
      <h2 className="text-stone-200 font-bold uppercase md:text-xl">Your Projects</h2>
      <Button onClick={onAddClick} label={" + Add Project"} />
        <ul className="flex flex-col gap-y-4 w-full items-start">
          {projects?.length > 0 &&
            projects.map((project) => {
              return (
                <li key={project.id} className="w-full">
                 <button className="w-full p-2 rounded-sm text-start text-stone-400 hover:bg-stone-800 hover:text-stone-200"> {project.title}</button>
                </li>
              );
            })}
        </ul>
    </aside>
  );
}

export { Sidebar };
