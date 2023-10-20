import { useState } from "react";

function TodoList( { resetMenu } ) {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    // HELPER FUNCTIONS

    /* add new task */
    const addTask = (e) => {

        e.preventDefault()
        
        if(newTask.trim() === "") {
            return;
        }

        setTasks([...tasks, newTask])
        setNewTask("")
        e.target.parentElement.reset()
    };

    /* delete task based on task.id key */
    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    

    return (<>
        <header>
            <h1 className="header-title">Todo List</h1>
        </header>

        <div className="input-container" style={{margin: "5rem 0 2rem"}}>
            <form className="task-form">
                <input type="text" className="task-input" placeholder="Type task..." onChange={(e) => setNewTask(e.target.value)}/>
                <button className="task-submit" onClick={addTask}>Submit</button>
            </form>
        </div>

        <div className="task-container">
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <div key={index}>
                        <li>{task}<button className="delete-button" onClick={() => deleteTask(index)}>Delete</button></li>
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