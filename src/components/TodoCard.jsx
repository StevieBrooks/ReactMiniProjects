import { FaCheck, FaTrash } from "react-icons/fa"


function TodoCard( { task, index, tasks, setTasks } ) {

    const doneTask = (item) => {
        const updatedTasks = [...tasks]
        updatedTasks[item].completed = true
        setTasks(updatedTasks)
    }

    const deleteTask = (item) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(item, 1)
        setTasks(updatedTasks)
    }

    return (<>
        
            <li>{task.name}</li>
            <div className="buttons">
                <button onClick={() => doneTask(index)}><FaCheck /></button>
                <button onClick={() => deleteTask(index)}><FaTrash/></button>
            </div>
        
    </>)
}

export default TodoCard