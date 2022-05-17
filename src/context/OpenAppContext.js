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

    weatherBtnId: '',
    setWeatherBtnId: () => { },    

    openedAppOrder: [],
    setOpenedAppOrder: () => { },
    isClicked: '',
    setIsClicked: () => { }
});

