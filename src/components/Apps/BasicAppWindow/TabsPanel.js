import React from 'react';

import './TabsPanel.css'

import TabsPanelAppData from './TabsPanelAppData'
import TabsPanelButtons from './TabsPanelButtons'

const TabsPanel = () => {
    return ( 
        <div className='tabsPanel'>
            <TabsPanelAppData/>
            <TabsPanelButtons/>
        </div>
     );
}
 
export default TabsPanel;