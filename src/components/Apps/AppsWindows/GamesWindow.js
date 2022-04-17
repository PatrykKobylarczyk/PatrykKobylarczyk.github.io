import React, { useState } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';

const GamesWindow = (props) => {

    const [isFullScreen, setIsFullScreen] = useState(false)

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen }}>
            <div className={isFullScreen ? 'fullScreen' : null} >
                <TabsPanel id={props.id} />
                <h1>Games window</h1>
            </div>
        </FullScreenContext.Provider>
    );
}

export default GamesWindow;