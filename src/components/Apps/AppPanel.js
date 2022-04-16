import React from 'react';

import '../../styles/AppPanel.css'
import '../../styles/ButtonSettings.css'

import { IconContext } from "react-icons";

import { AppsData } from '../../data/AppsData'
import AppButton from './AppButton'

const AppPanel = () => {

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
            <div className='appPanel'>
                <IconContext.Provider value={{ size: 30, color: 'white' }}>
                    {AppsList}
                </IconContext.Provider>
            </div>
    );
}

export default AppPanel;