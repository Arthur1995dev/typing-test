import React, { useContext } from "react";
import { Reducer } from "./reducerComp/reducer";

function CurrentInfo() {
    const {state} = useContext(Reducer);

    return <div className="current-info">
        <p className="speed">Cкорость <br/>{state.speed} зн/мин.</p>
        <p className="accuracy">Точность <br/>{state.accuracy}%</p>
    </div>
}
export default CurrentInfo;