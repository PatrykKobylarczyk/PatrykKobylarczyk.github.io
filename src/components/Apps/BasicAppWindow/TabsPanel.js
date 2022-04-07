import React from 'react';

import './TabsPanel.css'

import TabsPanelAppData from './TabsPanelAppData'
import TabsPanelButtons from './TabsPanelButtons'

const TabsPanel = (props) => {
    return ( 
        <div className='tabsPanel'>
            <TabsPanelAppData id={props.id}/>
            <TabsPanelButtons id={props.id}/>
        </div>
     );
}
 
export default TabsPanel;