import React, { useContext } from 'react';

import '../styles/NavigationPanel.scss'
import AppPanel from './Apps/AppPanel'
import Date from './Date/Date'

import { StyleContext } from '../context/StyleContext';

const NavigationPanel = () => {

    const { navPanelTransparency } = useContext(StyleContext)

    return (
        <div className='navigation-panel' style={{ opacity: navPanelTransparency }}>
            <AppPanel />
            <Date />
        </div>
    );
}

export default NavigationPanel;