import React, { useState, useContext } from 'react';

import { OpenAppContext } from '../../../context/OpenAppContext'
import { FullScreenContext } from '../../../context/FullScreenContext';

import FilesWindow from '../AppsWindows/FilesWindow';
import MailWindow from '../AppsWindows/MailWindow';
import SettingsWindow from '../AppsWindows/SettingsWindow';
import GamesWindow from '../AppsWindows/GamesWindow';
import PixelArt from '../AppsWindows/PixelArt';
import Weather from '../AppsWindows/Weather';

const OpenedAppList = () => {

    const {
        filesBtnId,
        mailBtnId,
        settingsBtnId,
        gamesBtnId,
        pixelBtnId,
        weatherBtnId,
        openedAppOrder
    } = useContext(OpenAppContext)

    const [fullScreenWindows, setFullScreenWindows] = useState([]);

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
        },
        {
            component: <PixelArt id={pixelBtnId} />,
            id: pixelBtnId
        },
        {
            component: <Weather id={weatherBtnId} />,
            id: weatherBtnId
        }

    ];

    //create app windows with translation - add class with transition: translate(x,y)
    const openedAppTranslation = ['firstWindow', 'secondWindow', 'thirdWindow', 'fourthWindow', 'fifthWindow']

    const openedAppList = openedAppOrder.map((app, index) =>
        <li
            key={appList[app - 1].id}
            className={fullScreenWindows.includes(app) ? 'window_active' : openedAppTranslation[index]}
        >{appList[app - 1].component}
        </li>)


    console.log(openedAppList);

    return (
        <FullScreenContext.Provider value={{ fullScreenWindows, setFullScreenWindows }}>
            <ul>
                {openedAppList}
            </ul>
        </FullScreenContext.Provider>
    );
}

export default OpenedAppList;