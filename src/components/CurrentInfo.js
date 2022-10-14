import React, { useContext } from "react";
import { Reducer } from "./reducerComp/reducer";

function CurrentInfo() {
    const {state} = useContext(Reducer);

    return <div>
        <p className="speed">Ваша скорость {state.speed} знаков в минуту.</p>
        <p className="accuracy">Точность {state.accuracy}%</p>
    </div>
}
export default CurrentInfo;