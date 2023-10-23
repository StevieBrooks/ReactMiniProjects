import TodoCards from "./TodoCards"
import { useState } from "react";

function TodoList( { resetMenu } ) {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState({name: "", completed: false})

    const addTask = (e) => {
        e.preventDefault()
        if(newTask.name.length < 1) {
            return;
        }

        setTasks([newTask, ...tasks])
        setNewTask({name: "", completed: false})
        e.target.parentElement.reset()
    }

    return (<>
        <header>
            <h1 className="header-title">Todo List</h1>
        </header>

        <div className="input-container" style={{margin: "5rem 0 2rem"}}>
            <form action="">
                <input type="text" onChange={(e) => setNewTask({name: e.target.value})} placeholder="Write task here..." />
                <button onClick={addTask}>Submit</button>
            </form>
        </div>

        <TodoCards tasks={tasks} setTasks={setTasks} />

        <div className="navigation" style={{display: "flex", justifyContent: "center"}}>
            <button className="menu-btn" onClick={() => resetMenu(null)}>Return to Menu</button>
        </div>
    </>)
}

export default TodoList