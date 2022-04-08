import { createContext } from 'react';

export const OpenAppContext = createContext({
    isFilesOpened: true,
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

    isGamesOpened: true,
    setIsGamesOpened: () => { },
    gamesBtnId: '',
    setGamesBtnId: () => { },

    openedAppOrder: [],
    setOpenedAppOrder: () => { }
});

