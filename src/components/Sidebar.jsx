import { Button } from "./Button";

function Sidebar({ projects, onAddClick }) {
  return (
    <aside className="w-1/3 flex flex-col bg-stone-900 h-[95%] rounded-r-xl pt-20 items-start px-8 gap-y-10 text-stone-500 md:w-72">
      <h2 className="text-stone-200 font-bold uppercase md:text-xl">Your Projects</h2>
      <Button onClick={onAddClick} label={" + Add Project"} />
      <div className="flex flex-col gap-y-5 w-full">
        {projects?.length > 0 &&
          projects.map((project) => {
            return (
              <ul key={project.id}>
                <li className="w-full px-2 hover:bg-zinc-900">{project.name}</li>
              </ul>
            );
          })}
      </div>
    </aside>
  );
}

export { Sidebar };
