import React, { useContext} from 'react';

import { OpenAppContext } from '../../../context/OpenAppContext'

import FilesWindow from '../AppsWindows/FilesWindow';
import MailWindow from '../AppsWindows/MailWindow';
import SettingsWindow from '../AppsWindows/SettingsWindow';
import GamesWindow from '../AppsWindows/GamesWindow';

const OpenedAppList = () => {

    const {
        isFilesOpened, filesBtnId,
        isMailOpened, mailBtnId,
        isSettingsOpened, settingsBtnId,
        isGamesOpened, gamesBtnId,
    } = useContext(OpenAppContext)

    const appList = [
        {
            status: isFilesOpened,
            component: <FilesWindow id={filesBtnId} />,
            id: filesBtnId
        },
        {
            status: isMailOpened,
            component: <MailWindow id={mailBtnId} />,
            id: mailBtnId
        },
        {
            status: isSettingsOpened,
            component: <SettingsWindow id={settingsBtnId} />,
            id: settingsBtnId
        },
        {
            status: isGamesOpened,
            component: <GamesWindow id={gamesBtnId} />,
            id: gamesBtnId
        }
    ];

  

    const openedAppListFilter = appList.filter(app => app.status ? app : null)

    const openedAppList = openedAppListFilter.map(app => <li key={app.id}>{app.component}</li>)

    return (
        <ul>
            {openedAppList}
        </ul>);
}

export default OpenedAppList;