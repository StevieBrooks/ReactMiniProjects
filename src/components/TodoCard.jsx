function TodoCard( { key, info } ) {
    return (<>
        
        <div className="card" key={key}>
            <p className="task">{info}</p>
            <div className="card-buttons">
                <button className="task-complete">Done</button>
                <button className="task-delete">Delete</button>
                {/* use fontawesome for these buttons */}
            </div>
        </div>

    </>)
}

export default TodoCard