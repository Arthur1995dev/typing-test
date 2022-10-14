import React, { useContext } from "react";
import { Reducer } from "./reducerComp/reducer";


function Result() {
    const {state, dispatch} = useContext(Reducer)

    function clickHundler() {
        dispatch({type: 'SET_RESET'})
    }
    return <div className="_container">
        <div className="_container-menu">
            <p>Итоговый результат:</p>
            <p>Точность: {state.accuracy}%</p>
            <p>Скорость: {state.speed} зн/мин.</p>
            <button onClick={clickHundler}>Начать заного</button>
        </div>
    </div>
}

export default Result