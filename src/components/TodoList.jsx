import { useState } from "react"
import ToDoCards from "./ToDoCards"

function TodoList( { resetMenu } ) {

    const searchStyling = {
        background: "#f5f5f5",
        color: "#040404",
        border: "1px solid #040404",
        padding: ".2rem"
    }

    const [taskList, setTaskList] = useState([])
    const [listOccupied, setListOccupied] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        setListOccupied(true)
        setTaskList([e.target[0].value, ...taskList]);  
        e.target.reset()
    }

    return (<>
        <header>
            <h1 className="header-title">To Do List</h1>
        </header>

        <div className="add-item-container" style={{margin: "5rem 0 2rem", textAlign: "center"}}>
            <form onSubmit={formSubmit}>
                <input type="text" className="input-item" style={searchStyling} placeholder="Enter task here..." />
                <button type="submit" className="item-submit" style={searchStyling}>Submit</button>
            </form>
        </div>

        <div className="item-display">
            <ToDoCards todoItems={taskList} listOccupied={listOccupied} />
        </div> 

        <div className="navigation" style={{display: "flex", justifyContent: "center"}}>
            <button className="menu-btn" onClick={() => resetMenu(null)}>Return to Menu</button>
        </div>
    </>)
}

export default TodoList