import { useRef } from "react";
import { Input } from "./Input.jsx";
import { Modal } from "./Modal.jsx";

function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const dialogRef = useRef();

  function areAllFieldsValid(data) {
    return !(data.title.trim() === "" || data.description.trim() === "" || data.dueDate.trim() === "");
  }

  function handleSaveClick() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    let newProject = {
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDate,
    };

    if (!areAllFieldsValid(newProject)) {
      dialogRef.current.open();
      return;
    }

    onAdd(newProject);
  }

  function handleCancelClick() {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dateRef.current.value = "";
    onCancel();
  }

  return (
    <>
      <Modal ref={dialogRef} buttonCaption="Okay">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops... Looks like you forgot to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="h-[95%] w-[35rem] pt-20">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={handleCancelClick} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSaveClick} className="px-6 rounded-md py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} type={"text"} />
          <Input ref={descriptionRef} label={"Description"} isTextArea />
          <Input ref={dateRef} label={"Due Date"} type={"date"} />
        </div>
      </div>
    </>
  );
}

export { NewProject };
