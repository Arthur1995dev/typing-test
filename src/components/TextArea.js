import React, { useContext } from "react";
import { Reducer } from './reducerComp/reducer';

function TextArea() {
    const {state} = useContext(Reducer);

    let text = state.text.split('').map((char, index) => {
        return <span 
                key={index}
                className={state.charIndex > index ? 'true-char' : ''}>
                {char}
                </span>
    })

    return <div className="text-area">{text}</div>
}

export default TextArea;
