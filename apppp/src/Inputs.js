import React, {useState, useEffect} from "react";

function Inputs () {
    
    const [someNumber, setSomeNumber] = useState(0)
    const [someText, setSomeText] = useState("this is some text to change")
    const [textButton, setTextButton] = useState()
    const changer = () => {
        setSomeText(someText)
    }

    return (
    <div>
        
        <input 
        name="Input"
        type="number"
        value={someNumber}
        onChange={(e) => setSomeNumber(e.target.value)}
        />
        <p>{someNumber}</p>

        <input 
        name="Input"
        type="text"
        value={someText}
        onChange={(e) => setSomeText(e.target.value)}
        />
        <button onClick={() => setTextButton(someText)}>Click me!</button>
        <p>{textButton && <div>{textButton}</div>}</p>


    </div>
    )
}

export default Inputs;