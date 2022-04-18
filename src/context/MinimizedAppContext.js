import { createContext } from 'react';

export const MinimizedAppContext = createContext({
    isAppMinimized: false,
    setIsAppMinimized: () => { },
    
});
