import React, {useState } from 'react';

import './BasicAppWindow.css'

import { FullScreenContext } from '../../../context/FullScreenContext';

import FilesWindow from '../AppsWindows/FilesWindow';
// import MailWindow from '../AppsWindows/MailWindow';
// import SettingsWindow from '../AppsWindows/SettingsWindow';
// import GamesWindow from '../AppsWindows/GamesWindow';
import TabsPanel from './TabsPanel';

const BasicAppWindow = () => {

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, animationClass, setAnimationClass}}>
            <div className={`basicAppWindow ${animationClass}`} >
                <TabsPanel />
                <FilesWindow />
                {/* {isMailOpened && <MailWindow />}
            {isSettingsOpened && <SettingsWindow />}
            {isGamesOpened && <GamesWindow />} */}
            </div>
        </FullScreenContext.Provider>
    );
}

export default BasicAppWindow;