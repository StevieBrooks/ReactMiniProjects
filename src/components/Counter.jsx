import { useState } from "react";
// import "../app.css"

function Counter( { resetMenu } ) {

    /*==============LOGIC=============*/

    let [count, setCount] = useState(0)

    const incFunc = () => {
        setCount(count + 1)
        
    }

    const decFunc = () => {
        setCount(count - 1)
        
    }

    /*============STYLING===========*/

    const coConStyle = {
        position: "relative",
        top: "50%",
        translate: "0, -50%",
        margin: "5rem 0 2rem",
        textAlign: "center"
    }
    
    const coDispStyle = {
        borderRadius: count > 4 && count < 10 ? "10px" : count > 9 && count < 15 ? "50px" : 0,
        background: count > 14 ? "#6290C8" : "#f5f5f5",
        width: "200px",
        height: "50px",
        border: "2px solid #040404",
        margin: "1rem auto",
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const incDecStyle = {
        background: "#f5f5f5",
        padding: ".2rem .5rem",
        fontSize: "1.1rem",
        margin: "1rem",
        cursor: "pointer",
        border: "2px solid #040404",
        borderRadius: "5px"
    }


    /*================RETURN=============*/

    return(<>
        <header>
            <h1 className="header-title">Increment Counter</h1>
        </header>
        <div className="counter-container" style={coConStyle}>
            <div className="counter-display" style={coDispStyle}>{count}</div>
            <button className="incBtn" style={incDecStyle} onClick={incFunc}>Inc (+)</button>
            <button className="decBtn" style={incDecStyle} onClick={decFunc}>Dec (-)</button>
        </div>
        <div className="navigation" style={{display: "flex", justifyContent: "center"}}>
            <button className="menu-btn" onClick={() => resetMenu(null)}>Return to Menu</button>
        </div>
    </>)
}

export default Counter