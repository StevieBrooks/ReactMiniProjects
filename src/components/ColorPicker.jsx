import { useState } from "react";
import ColorPickerBox from "./ColorPickerBox";
import RGBRange from "./RGBRange";

function ColorPicker({ resetMenu }) {

    const [displayColor, setDisplayColor] = useState("rgb(255, 255, 255)")

    //   let rVal, gVal, bVal = null
    

    const changeDisplayColor = (e) => {
        setDisplayColor(e.target.classList.value);
        // switch(e.target.id) {
        //     case "rVal":
        //         setDisplayColor(`rgb(${e.target.value}, ${gVal}, ${bVal})`);
        //         break;
        //     case "gVal":
        //         setDisplayColor(`rgb(${rVal}, ${e.target.value}, ${bVal})`);
        //         break;
        //     case "bVal":
        //         setDisplayColor(`rgb(${rVal}, ${gVal}, ${e.target.value})`);
        //         break;
        //     default:
        //         setDisplayColor(e.target.classList.value);
        //         const rgbDivided = displayColor.split(",").map((item) => item.replace(/[^0-9]/g, ""));
        //         [rVal, gVal, bVal] = rgbDivided;  
        //         console.log(rVal);
        //         break;
        // }
        
    }

    const colorDisplayStyle = {
        width: "250px",
        height: "100px",
        border: "2px solid",
        background: displayColor,
        marginTop: "5rem" 
    }

    const colorArray = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(255, 255, 0)", "rgb(255, 165, 0)", "rgb(128, 0, 128)", "rgb(255, 192, 203)", "rgb(255, 215, 0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(165, 42, 42)", "rgb(128, 128, 128)"]


    return (<>
        <header>
            <h1 className="header-title">Color Picker</h1>
        </header>
        
        <main>

            <div className="color-display" style={colorDisplayStyle}></div>

            <div className="color-choices" style={{marginTop: "2rem", border: "2px solid", display: "flex", justifyContent: "center", flexWrap: "wrap", width: "250px"}}>

                {colorArray.map((item, index) => (
                    <ColorPickerBox key={index} bgColor={item} changeColor={changeDisplayColor} />
                ))}

            </div>

            {/* <RGBRange rVal={rVal} gVal={gVal} bVal={bVal} changeColor={changeDisplayColor} /> */}
            
        </main>

        <div className="navigation" style={{display: "flex", justifyContent: "center"}}>
            <button className="menu-btn" onClick={() => resetMenu(null)}>Return to Menu</button>
        </div>
    </>)
}

export default ColorPicker

/* 
 - couldn't figure out how to do the RGB range part, feels like it was just a step away too. Miffed!
*/