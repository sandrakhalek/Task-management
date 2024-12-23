import { Input } from "./Input.jsx";

function NewProject() {
  return (
    <div className="h-[95%] w-[35rem] pt-20">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 rounded-md py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} isTextArea />
        <Input label={"Date"} />
      </div>
    </div>
  );
}

export { NewProject };
