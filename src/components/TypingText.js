import React, { useContext } from "react";
import { Reducer } from './reducerComp/reducer';
import restart from './img/restart.svg';

function TypingText() {
    const {state, dispatch} = useContext(Reducer);

    let text = state.text.split('').map((char, index) => {
        return <span 
                key={index}
                className={state.charIndex > index ? 'true-char' : ''}>
                {char}
                </span>
    })

    const restartHundler = () => {
        dispatch({type: 'SET_RESET'})
    }
    return (
        <div className='typing-text_container'>
            <div className="current-info">
                <p className="speed">Cкорость <br/>{state.speed} зн/мин.</p>
                <p className="accuracy">Точность <br/>{state.accuracy}%</p>
            </div>
            <div className="text-area">{text}</div>
            <div className="reset_container" onClick={restartHundler}><img src={restart} alt='restart' width={25} height={25}></img></div>
        </div>
    )
}

export default TypingText;
