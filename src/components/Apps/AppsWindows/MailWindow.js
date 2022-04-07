import React, { useState } from 'react';

import '../BasicAppWindow/BasicAppWindow.css'

import { FullScreenContext } from '../../../context/FullScreenContext';

import TabsPanel from '../BasicAppWindow/TabsPanel';

const MailWindow = (props) => {

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <div className={`basicAppWindow ${animationClass}`} >
                <TabsPanel id={props.id}/>
                <h1>Mail window</h1>
            </div>
        </FullScreenContext.Provider>
    );
}

export default MailWindow;