import norProjectImage from '../assets/no-projects.png';
import { Button } from './Button';

function NoProjectSelected ({onAddClick}) {
    return <div className="h-[95%] text-center w-2/3 pt-20">
        <img src={norProjectImage} alt="an empty task list" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Seelcted</h2>
        <p className='text-stone-400 mb-4'>Select a project or get started a new one</p>
        
        <Button label={"Create new Project"} onClick={onAddClick} />
      
    </div>
}

export {NoProjectSelected}