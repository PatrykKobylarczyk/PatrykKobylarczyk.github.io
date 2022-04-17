import { createContext } from 'react';

export const FullScreenContext = createContext({
    isFullScreen: false,
    setIsFullScreen: () => { },
    // animationClass: '',
    // setAnimationClass: () => {}
});
