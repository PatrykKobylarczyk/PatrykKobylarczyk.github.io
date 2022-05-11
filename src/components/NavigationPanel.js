import React, { useContext } from 'react';

import '../styles/NavigationPanel.scss'
import AppPanel from './Apps/AppPanel'
import Date from './Date/Date'

import { StyleContext } from '../context/StyleContext';

const NavigationPanel = () => {

    const { navPanelTransparency, isRounded, lightmode } = useContext(StyleContext)

    const NavPanelStyle = { backgroundImage: `linear-gradient(145deg, rgba(49, 53, 58, ${navPanelTransparency / 100}) 30%, rgba(30, 33, 39, ${navPanelTransparency / 100}) 100%)` }
    const NavPanelStyleLightmode = { backgroundImage: `linear-gradient(145deg, rgba(215, 221, 224, ${navPanelTransparency / 100}) 30%, rgba(194, 189, 181, ${navPanelTransparency / 100}) 100%)` }
    
    return (
        <div
            style={lightmode ? NavPanelStyleLightmode : NavPanelStyle}
            className={
                `navigation-panel 
            ${isRounded && 'roundedX2'}`
            }
        >
            <AppPanel />
            <Date />
        </div>
    );
}

export default NavigationPanel;