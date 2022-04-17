import React, { useContext } from 'react';

import { OpenAppContext } from '../../../context/OpenAppContext'

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

    const openedAppTranslation = [ 'firstWindow', 'secondWindow', 'thirdWindow', 'fourthWindow']

    const openedAppList = openedAppOrder.map((app, index) => <li key={appList[app-1].id} className={`basicAppWindow ${openedAppTranslation[index]}`}>{appList[app-1].component}</li>)

    
    return (
        <ul>
            {openedAppList}
        </ul>);
}

export default OpenedAppList;