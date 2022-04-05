import { createContext } from 'react';

export const OpenAppContext = createContext({
    isFilesOpened: false,
    setIsFilesOpened: () => { },
    isMailOpened: false,
    setIsMailOpened: () => { },
    isSettingsOpened: false,
    setIsSettingsOpened: () => { },
    isGamesOpened: false,
    setIsGamesOpened: () => { },
});

