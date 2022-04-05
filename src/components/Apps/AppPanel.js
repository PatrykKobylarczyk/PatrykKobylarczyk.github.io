import React, { useState } from 'react';

import './AppPanel.css'
import './ButtonSettings.css'

import { IconContext } from "react-icons";
import { HoverButtonsContext } from '../../context/HoverButtonsContext';

import { AppsData } from '../../data/AppsData'
import AppButton from './AppButton'

const AppPanel = () => {
    const [hover, setHover] = useState()

    const AppsList = AppsData.map(app => {
        return <AppButton
            key={app.id}
            id={app.id}
            background={app.background }
            backgroundHover={app.backgroundHover}
            icon={app.icon}
        />
        
    })

    return (
        <HoverButtonsContext.Provider value={{ hover, setHover }}>
            <div className='appPanel'>
                <IconContext.Provider value={{ size: 30, color: 'white' }}>
                    {AppsList}
                </IconContext.Provider>
            </div>
        </HoverButtonsContext.Provider>
    );
}

export default AppPanel;