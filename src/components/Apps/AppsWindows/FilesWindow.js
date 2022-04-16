import React, { useState } from 'react';

import '../../../styles/BasicAppWindow.scss'

import { FullScreenContext } from '../../../context/FullScreenContext';

import TabsPanel from '../BasicAppWindow/TabsPanel';

const FilesWindow = (props) => {

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass }}>
            <div className={`basicAppWindow files ${animationClass}`} >
                <TabsPanel id={props.id}/>
                <h1>Files window</h1>
            </div>
        </FullScreenContext.Provider>
    );
}

export default FilesWindow;