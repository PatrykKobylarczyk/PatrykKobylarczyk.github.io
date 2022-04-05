import { createContext } from 'react';

export const HoverButtonsContext = createContext({
    hover: false,
    setHover: () => { }
});

