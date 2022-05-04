import React, { useContext } from 'react';

import '../styles/NavigationPanel.scss'
import AppPanel from './Apps/AppPanel'
import Date from './Date/Date'

import { StyleContext } from '../context/StyleContext';

const NavigationPanel = () => {

    const { navPanelTransparency } = useContext(StyleContext)

    const NavPanelStyle = {backgroundImage :`linear-gradient(145deg, rgba(49, 53, 58, ${navPanelTransparency/100}) 30%, rgba(30, 33, 39, ${navPanelTransparency/100}) 100%)`}

    return (
        <div className='navigation-panel' style={NavPanelStyle}>
            <AppPanel />
            <Date />
        </div>
    );
}

export default NavigationPanel;