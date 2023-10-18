import TodoCard from "./TodoCard"

function TodoCards( { todoItems } ) {
    console.log(todoItems)
    return (<>
        <div className="card-container">

            {todoItems.map((item, index) => (
                <TodoCard key={index} info={item} />
            ))}

        </div>
    </>)
}

export default TodoCards