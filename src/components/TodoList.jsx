import { useState } from "react"
import ToDoCards from "./ToDoCards"

function TodoList( { resetMenu } ) {

    const [taskList, setTaskList] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        setTaskList([e.target[0].value, ...taskList]);  
    }

    return (<>
        <header style={{visibility: "hidden"}}>
            <h1 className="header-title">To Do List</h1>
        </header>

        <div className="add-item-container">
            <form onSubmit={formSubmit}>
                <input type="text" className="input-item" placeholder="Enter task here..." />
                <button type="submit" className="item-submit">Submit</button>
            </form>
        </div>

        <div className="item-display">
            <ToDoCards todoItems={taskList} />
        </div> 

        <div className="navigation" style={{display: "flex", justifyContent: "center"}}>
            <button className="menu-btn" onClick={() => resetMenu(null)}>Return to Menu</button>
        </div>
    </>)
}

export default TodoList