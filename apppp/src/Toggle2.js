import React from "react";
import { useState } from "react";

function Toggle2() {
    const [ blue, setBlue ] = useState (false);
    const [ number, setNumber] = useState (false)
    const changer = () => {
        setBlue(!blue)
        setNumber(!number)
    }

    return (
        <div>
            <button className={blue ? 'something' : 'something2' } onClick={changer}> CLICK ME!</button>
            <br/>
            <p className={blue ? 'something' : 'something2' }>{number ? 0 : 1}</p>
        </div>
    )
}

export default Toggle2;