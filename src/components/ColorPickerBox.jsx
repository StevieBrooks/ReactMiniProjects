function ColorPickerBox({bgColor, changeColor}) {
    return (<>
        <div className={bgColor} style={{width: "20px", height: "20px", border: "1px solid black", margin: ".5rem", background: bgColor, cursor: "pointer"}} onClick={changeColor}></div>
    </>)
}

export default ColorPickerBox