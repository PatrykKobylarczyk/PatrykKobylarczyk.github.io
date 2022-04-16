import React, { useState } from 'react';

import '../../../styles/BasicAppWindow.css'

import { FullScreenContext } from '../../../context/FullScreenContext';

import TabsPanel from '../BasicAppWindow/TabsPanel';

const SettingsWindow = (props) => {

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <div className={`basicAppWindow settings${animationClass}`} >
                <TabsPanel id={props.id}/>
                <h1>Settings window</h1>
            </div>
        </FullScreenContext.Provider>
    );
}

export default SettingsWindow;