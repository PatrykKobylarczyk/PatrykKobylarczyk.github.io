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

    pixelBtnId: '',
    setPixelBtnId: () => { },    

    openedAppOrder: [],
    setOpenedAppOrder: () => { },
    isClicked: '',
    setIsClicked: () => { }
});

