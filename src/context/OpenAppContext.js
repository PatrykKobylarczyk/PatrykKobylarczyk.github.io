import { createContext } from 'react';

export const OpenAppContext = createContext({
    isFilesOpened: false,
    setIsFilesOpened: () => { },
    filesBtnId: '',
    setFilesBtnId: () => { },

    isMailOpened: false,
    setIsMailOpened: () => { },
    mailBtnId: '',
    setMailBtnId: () => { },

    isSettingsOpened: false,
    setIsSettingsOpened: () => { },
    settingsBtnId: '',
    setSettingsBtnId: () => { },

    isGamesOpened: false,
    setIsGamesOpened: () => { },
    gamesBtnId: '',
    setGamesBtnId: () => { },
});

