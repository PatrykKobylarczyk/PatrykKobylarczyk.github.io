import React from 'react';

import '../../../styles/TabsPanel.scss'

import TabsPanelAppData from './TabsPanelAppData'
import TabsPanelButtons from './TabsPanelButtons'

const TabsPanel = (props) => {
    return (
        <div className={`tabsPanel ${props.class}`} ref={props.nodeRef} >
            <TabsPanelAppData id={props.id} />
            <TabsPanelButtons id={props.id} />
        </div>
    );
}

export default TabsPanel;