import React, { useState, useContext } from 'react';

import { OpenAppContext } from '../../../context/OpenAppContext'
import { FullScreenContext } from '../../../context/FullScreenContext';
import { MinimizedAppContext } from '../../../context/MinimizedAppContext';

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

    const [fullScreenWindows, setFullScreenWindows] = useState([])
    const [minimizedApps, setMinimizedApps] = useState([])

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

    //create app windows with translation - add class with transition: translate(x,y)
    const openedAppTranslation = ['firstWindow', 'secondWindow', 'thirdWindow', 'fourthWindow']

    const openedAppList = openedAppOrder.map((app, index) => <li key={appList[app - 1].id} className={fullScreenWindows.includes(app) ? 'window_active' : openedAppTranslation[index]}>{appList[app - 1].component}</li>)


    return (
        <FullScreenContext.Provider value={{ fullScreenWindows, setFullScreenWindows }}>
            <MinimizedAppContext.Provider value={{minimizedApps, setMinimizedApps}}>
                <ul>
                    {openedAppList}
                </ul>
            </MinimizedAppContext.Provider>
        </FullScreenContext.Provider>
    );
}

export default OpenedAppList;