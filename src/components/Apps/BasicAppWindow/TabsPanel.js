import React, { useContext } from 'react';

import '../../../styles/TabsPanel.scss'

import { StyleContext } from '../../../context/StyleContext';

import TabsPanelAppData from './TabsPanelAppData'
import TabsPanelButtons from './TabsPanelButtons'

const TabsPanel = (props) => {

    const {isRounded} = useContext(StyleContext)

    return ( 
            <div className={`tabsPanel ${props.class} ${isRounded ?'tabsPanelRounded' : null}`} >
                <TabsPanelAppData id={props.id} />
                <TabsPanelButtons id={props.id} />
            </div>
    );
}

export default TabsPanel;