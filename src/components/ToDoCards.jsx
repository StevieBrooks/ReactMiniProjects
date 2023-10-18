import TodoCard from "./TodoCard"

function TodoCards( { todoItems, listOccupied } ) {

    const cardContStyling = {
        background: "#040404",
        border: "2px solid #f5f5f5",
        borderRadius: "5px",
        padding: "1rem",
        display: listOccupied ? "block" : "none"
    }

    return (<>
        <div className="card-container" style={cardContStyling}>

            {todoItems.map((item, index) => (
                <TodoCard key={index} info={item} />
            ))}

        </div>
    </>)
}

export default TodoCards