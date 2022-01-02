import react, { useState, useReducer } from "react";
import "./App.css";

function Checkbox() {

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <>
            <h2 className="subTitle" align="center">useRducer</h2>
            <input 
            id="checkbox"
            type="checkbox" 
            value={checked} 
            onChange={toggle} />
            <label htmlFor="checkbox">{checked ? "Checked" : "Not checked"} </label>
        </>
    );
}

export default Checkbox;