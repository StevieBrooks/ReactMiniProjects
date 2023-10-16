import { useState } from "react"
import Counter from "./Counter"
import ColorPicker from "./ColorPicker"


function ReactMiniProjectMenu() {

    /*==========LOGIC==============*/

    const [selectedProject, setSelectedProject] = useState(null)

    const renderSelectedProject = () => {
        switch(selectedProject) {
            case "counter":
                return <Counter resetMenu={setSelectedProject} />;
                break;
            case "colorPicker":
                return <ColorPicker resetMenu={setSelectedProject} />;
                break;
            default:
                return null;
        }
    };

    /*==============STYLING==============*/

    const headerStyle = {
        display: selectedProject != null && "none"
    }

    const menuContStyle = {
        display: selectedProject != null && "none",
        textAlign: "center",
        paddingTop: "1rem"
    }
    

    /*===============RETURN==================*/

    return (<>

        <header style={headerStyle}>
            <h1 className="header-title">{selectedProject == null && "React Mini-Projects Menu"}</h1>
        </header>

        <div className="menu-container" style={menuContStyle}>

            <button className="menu-btn" onClick={() => setSelectedProject("counter")}>1. Increment Counter</button>

            <button className="menu-btn" onClick={() => setSelectedProject("colorPicker")}>2. Color Picker</button>

        </div>

        <div className="project-container">
            {renderSelectedProject()}
        </div>

    </>)
}



export default ReactMiniProjectMenu