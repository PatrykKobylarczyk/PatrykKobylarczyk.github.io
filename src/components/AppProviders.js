import React from 'react';

import { DateContext } from '../context/DateContext'
import { OpenAppContext } from '../context/OpenAppContext'
import { FullScreenContext } from '../context/FullScreenContext'
import { HoverButtonsContext } from '../context/OpenAppContext'

const AppProviders = () => {
    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <HoverButtonsContext.Provider value={{ hover, setHover }}>
                {children}
            </HoverButtonsContext.Provider>
        </FullScreenContext.Provider>
    );
}

export default AppProviders;