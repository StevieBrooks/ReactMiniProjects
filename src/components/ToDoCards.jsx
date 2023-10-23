import TodoCard from "./TodoCard"

function TodoCards( { tasks, setTasks } ) {

    return (<>
        <div className="item-container">
            <ul style={{padding: "0rem"}}>
                {tasks.map((task, index) => (
                    <div key={index} style={{
                        background: task.completed ? "green" : "#f5f5f5",
                        color: task.completed && "#f5f5f5",
                        margin: "1rem",
                        padding: ".5rem",
                        listStyle: "none",
                        border: "1px solid",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <TodoCard task={task} index={index} tasks={tasks} setTasks={setTasks} />
                    </div>
                ))}
            </ul>
        </div>
    </>)
}

export default TodoCards