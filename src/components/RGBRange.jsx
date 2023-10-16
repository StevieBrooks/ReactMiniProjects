function RGBRange({rVal, gVal, bVal, changeColor}) {

    return (<>
        
        <div className="rgb-select">

            <label htmlFor="rVal">R
                <input type="range" min={0} max={255} defaultValue={rVal} id="rVal" onChange={changeColor}/>
            </label>

            <label htmlFor="gVal">G
                <input type="range" min={0} max={255} defaultValue={gVal} id="gVal" onChange={changeColor}/>
            </label>

            <label htmlFor="bVal">B
                <input type="range" min={0} max={255} defaultValue={bVal} id="bVal" onChange={changeColor}/>
            </label>

        </div>

    </>)
}

export default RGBRange