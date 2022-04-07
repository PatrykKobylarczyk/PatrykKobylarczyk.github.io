import React, { useState } from 'react';

import './BasicAppWindow.css'

import { FullScreenContext } from '../../../context/FullScreenContext';

import TabsPanel from './TabsPanel';

const BasicAppWindow = () => {

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <div className={`basicAppWindow ${animationClass}`} >
                <TabsPanel />
                <h1>Files window</h1>
            </div>
        </FullScreenContext.Provider>
    );
}

export default BasicAppWindow;