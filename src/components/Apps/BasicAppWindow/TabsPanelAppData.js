import React from 'react';

import '../../../styles/TabsPanelAppData.scss'
import { AppsData } from '../../../data/AppsData'
import { IconContext } from "react-icons";

const TabsPanelAppData = () => {
    return (
        <IconContext.Provider value={{ size: 20, color: 'white' }}>
            <div className='tabsPanelAppData'>
                <span>{AppsData[0].icon}</span>
                <p>{AppsData[0].name}</p>
            </div>
        </IconContext.Provider>
    );
}

export default TabsPanelAppData;