import React, {useState} from 'react';


import { FullScreenContext } from '../context/FullScreenContext'
import { HoverButtonsContext } from '../context/HoverButtonsContext'

const AppProviders = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const [hover, setHover] = useState()

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <HoverButtonsContext.Provider value={{ hover, setHover }}>
                {children}
            </HoverButtonsContext.Provider>
        </FullScreenContext.Provider>
    );
}

export default AppProviders;