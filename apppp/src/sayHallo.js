import React from "react";

function Hello(){

    const sayHallo = () => {
        console.log("hello");
    }
    return(
        <div>
            <h3>This is the hallo componemt</h3>
            <button onClick={sayHallo}>Say hallo</button>
        </div>
    );
}
export default Hello;