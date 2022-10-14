import React, { useContext } from 'react';
import { Reducer } from '../reducerComp/reducer';

function ChangeLang() {
    
    const languages = ['Русский', 'Английский'];
    
    const {dispatch} = useContext(Reducer);

    const options = languages.map((lang, index) => {
        return <option 
                key={index}
                onClick={() => dispatch({type: 'SET_LANG', lang})}>
                {lang}
                </option>
    })

    return <div>
        Выберите язык:
        <select>
            {options}
        </select>
    </div>
}

export default ChangeLang;