import { useState } from "react";

function TodoCard({ info }) {
  const [taskDone, setTaskDone] = useState(false);

  const cardStyling = {
    background: taskDone ? "#040404" : "#6290c8", 
    color: taskDone && "#f5f5f5",
    border: "1px solid #f5f5f5",
    padding: ".5rem",
    marginBottom: ".5rem",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const buttonStyling = {
    background: "#040404",
    color: "#f5f5f5",
    border: "1px solid #f5f5f5",
    padding: ".3rem",
  };

  const checkTask = (e) => {
    setTaskDone(!taskDone); 
  };

  const deleteTask = (e) => {
    console.log(e)
  }

  return (
    <>
      <div className="card" style={cardStyling}>
        <p className="task">{info}</p>
        <div
          className="card-buttons"
          style={{ display: "flex", flexDirection: "column", textAlign: "right", marginLeft: "1rem" }}
        >
          <button className="task-complete" style={buttonStyling} onClick={checkTask}>
            Done
          </button>
          <button className="task-delete" style={buttonStyling} onClick={deleteTask}>
            Delete
          </button>
          {/* use fontawesome for these buttons */}
        </div>
      </div>
    </>
  );
}

export default TodoCard;
