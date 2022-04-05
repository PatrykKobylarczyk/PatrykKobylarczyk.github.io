import React, { useContext } from 'react';
import { IconContext } from "react-icons";
import { GrSettingsOption } from 'react-icons/gr'
import { DateContext } from '../../context/DateContext';

import './ButtonSettings.css'

const Settings = () => {
    const { isDateVisible, setIsDateVisible } = useContext(DateContext)

    const ToggleVisibilityDateHandler = () => {
        setIsDateVisible(prevState => !prevState)
        console.log(isDateVisible)
    }

    return (
        <button className='buttonSettings' onClick={ToggleVisibilityDateHandler}>
            <IconContext.Provider value={{ size: 35 }}>
                <GrSettingsOption />
            </IconContext.Provider>
        </button>
    );
}

export default Settings;