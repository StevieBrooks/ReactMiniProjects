import { useState } from "react";

function TodoList( { resetMenu } ) {

    const [newTask, setNewTask] = useState({name: "", completed: false})
    const [tasks, setTasks] = useState([])

    const addTask = (e) => {
        e.preventDefault()
        if(newTask.name.length < 1) {
            return;
        }

        setTasks([newTask, ...tasks])
        setNewTask({name: "", completed: false})
        e.target.parentElement.reset()
    }

    const doneTask = (taskIndex) => {
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex].completed = true; 
        setTasks(updatedTasks);
        console.log(tasks)
    };
    

    const deleteTask = (taskToDelete) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(taskToDelete, 1)
        setTasks(updatedTasks)
    }

    return (<>
        <header>
            <h1 className="header-title">Todo List</h1>
        </header>

        <div className="input-container" style={{margin: "5rem 0 2rem"}}>
            <form action="" className="input-form">
                <input type="text" className="task-input" onChange={(e) => setNewTask({...newTask, name: e.target.value})} placeholder="Punch in new task..." />
                <button className="task-submit" onClick={addTask}>Submit Task</button>
            </form>
        </div>

        <div className="task-container">
            <ul>
                {tasks.map((task, index) => (
                    <div key={index} style={{background: task.completed && "red"}}>
                        <li>{task.name}</li>
                        <button className="done-task" onClick={() => doneTask(index)}>Done</button>
                        <button className="delete-task" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>

        <div className="navigation" style={{display: "flex", justifyContent: "center"}}>
            <button className="menu-btn" onClick={() => resetMenu(null)}>Return to Menu</button>
        </div>
    </>)
}

export default TodoList