import { createContext } from 'react';

export const OpenAppContext = createContext({
    filesBtnId: '',
    setFilesBtnId: () => { },

    mailBtnId: '',
    setMailBtnId: () => { },

    settingsBtnId: '',
    setSettingsBtnId: () => { },

    gamesBtnId: '',
    setGamesBtnId: () => { },

    openedAppOrder: [],
    setOpenedAppOrder: () => { },
    isClicked: '',
    setIsClicked: () => { }
});

