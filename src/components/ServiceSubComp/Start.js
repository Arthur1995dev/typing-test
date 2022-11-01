import React, { useContext, useEffect } from "react";
import { Reducer } from "../reducerComp/reducer";

function Start() {
    
    const {dispatch} = useContext(Reducer);

    const startHundler = () => {
        dispatch({type: 'SET_START'});
    }
    return <button className="start-button button" onClick={startHundler}>Начать тест</button>
}

export default Start;