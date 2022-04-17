import React, { useState, useContext } from 'react';

import { OpenAppContext } from '../../../context/OpenAppContext'
import { FullScreenContext } from '../../../context/FullScreenContext';

import FilesWindow from '../AppsWindows/FilesWindow';
import MailWindow from '../AppsWindows/MailWindow';
import SettingsWindow from '../AppsWindows/SettingsWindow';
import GamesWindow from '../AppsWindows/GamesWindow';

const OpenedAppList = () => {

    const {
        filesBtnId,
        mailBtnId,
        settingsBtnId,
        gamesBtnId,
        openedAppOrder
    } = useContext(OpenAppContext)

    const [isFullScreen, setIsFullScreen] = useState(false)
    const [fullScreenWindows, setFullScreenWindows] = useState([])

    const appList = [
        {
            component: <FilesWindow id={filesBtnId} />,
            id: filesBtnId
        },
        {
            component: <MailWindow id={mailBtnId} />,
            id: mailBtnId
        },
        {
            component: <SettingsWindow id={settingsBtnId} />,
            id: settingsBtnId
        },
        {
            component: <GamesWindow id={gamesBtnId} />,
            id: gamesBtnId
        }
    ];

    const openedAppTranslation = ['firstWindow', 'secondWindow', 'thirdWindow', 'fourthWindow']

    const openedAppList = openedAppOrder.map((app, index) => <li key={appList[app - 1].id} className={`${openedAppTranslation[index]} ${isFullScreen ? 'window_active' : null}`}>{appList[app - 1].component}</li>)

    return (
        <FullScreenContext.Provider value={{ isFullScreen, setIsFullScreen, fullScreenWindows, setFullScreenWindows }}>
            <ul>
                {openedAppList}
            </ul>
        </FullScreenContext.Provider>
    );
}

export default OpenedAppList;