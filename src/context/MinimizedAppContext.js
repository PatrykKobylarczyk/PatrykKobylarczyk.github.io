import { createContext } from 'react';

export const MinimizedAppContext = createContext({
    minimizedApps: [],
    setMinimizedApps: () => { },
});
