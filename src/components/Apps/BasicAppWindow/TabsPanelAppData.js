import React from 'react';

import '../../../styles/TabsPanelAppData.scss'
import { AppsData } from '../../../data/AppsData'
import { IconContext } from "react-icons";

const TabsPanelAppData = (props) => {
    return (
        <IconContext.Provider value={{ size: 20, color: 'white' }}>
            <div className='tabsPanelAppData'>
                <span>{AppsData[props.id-1].icon}</span>
                <p>{AppsData[props.id-1].name}</p>
            </div>
        </IconContext.Provider>
    );
}

export default TabsPanelAppData;