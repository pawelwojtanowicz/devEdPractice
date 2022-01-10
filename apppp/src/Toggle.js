import React, { useState } from "react";

function Toggle(){
    const [text, setText] = useState(true)
    const toButton = () => {
        setText(!text)
    } 
    return (
        <div>
        <button onClick={toButton}>change me</button>
        <p>{text ? 'unchanged' : 'changed'}</p>
        </div>
        
    );
}
export default Toggle;