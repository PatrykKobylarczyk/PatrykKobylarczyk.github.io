import React, { useState } from 'react';

import '../../../styles/BasicAppWindow.scss'

import { FullScreenContext } from '../../../context/FullScreenContext';

import TabsPanel from '../BasicAppWindow/TabsPanel';

const GamesWindow = (props) => {

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <div className={`basicAppWindow games ${animationClass}`} >
                <TabsPanel id={props.id}/>
                <h1>Games window</h1>
            </div>
        </FullScreenContext.Provider>
    );
}

export default GamesWindow;