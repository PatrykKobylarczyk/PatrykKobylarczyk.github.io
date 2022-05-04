import { createContext } from 'react';

export const StyleContext = createContext({
    
    // for set a navigation panel transparency from input range in settings app
    navPanelTransparency: '',
    setNavPanelTransparency: () => { }
});

