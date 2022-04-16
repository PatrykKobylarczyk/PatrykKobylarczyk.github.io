import React from 'react';

import '../styles/NavigationPanel.css'
import AppPanel from './Apps/AppPanel'
import Date from './Date/Date'

const NavigationPanel = () => {
    return ( 
        <div className='navigation-panel'>
            <AppPanel/>
            <Date/>
        </div>
    );
}
 
export default NavigationPanel;