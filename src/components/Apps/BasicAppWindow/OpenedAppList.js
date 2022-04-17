import React, { useContext} from 'react';

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

  

    const openedAppListFilter = appList.filter(app => openedAppOrder.includes(app.id) ? app : null)

    const openedAppList = openedAppListFilter.map(app => <li key={app.id}>{app.component}</li>)

    return (
        <ul>
            {openedAppList}
        </ul>);
}

export default OpenedAppList;