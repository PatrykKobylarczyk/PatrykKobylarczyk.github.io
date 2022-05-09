import React, { useState } from 'react';

import '../styles/App.scss';
import { DateContext } from '../context/DateContext'
import { OpenAppContext } from '../context/OpenAppContext'
import { MinimizedAppContext } from '../context/MinimizedAppContext';
import { StyleContext } from '../context/StyleContext';

import NavigationPanel from './NavigationPanel'
import OpenedAppList from './Apps/BasicAppWindow/OpenedAppList'

const App = () => {
  const [isDateVisible, setIsDateVisible] = useState(true)

  const [isFilesOpened, setIsFilesOpened] = useState();
  const [isMailOpened, setIsMailOpened] = useState();
  const [isSettingsOpened, setIsSettingsOpened] = useState();
  const [isGamesOpened, setIsGamesOpened] = useState();
  const [filesBtnId, setFilesBtnId] = useState();
  const [mailBtnId, setMailBtnId] = useState();
  const [settingsBtnId, setSettingsBtnId] = useState();
  const [gamesBtnId, setGamesBtnId] = useState();
  const [pixelBtnId, setPixelBtnId] = useState();
  const [openedAppOrder, setOpenedAppOrder] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [navPanelTransparency, setNavPanelTransparency] = useState(100);
  const [primaryColor, setPrimaryColor] = useState('#1d1f22');
  const [isRounded, setIsRounded] = useState(true);

  const openAppContextValue = {
    isFilesOpened, setIsFilesOpened,
    filesBtnId, setFilesBtnId,
    isMailOpened, setIsMailOpened,
    mailBtnId, setMailBtnId,
    isSettingsOpened, setIsSettingsOpened,
    settingsBtnId, setSettingsBtnId,
    isGamesOpened, setIsGamesOpened,
    gamesBtnId, setGamesBtnId,
    pixelBtnId, setPixelBtnId,
    openedAppOrder, setOpenedAppOrder,
    isClicked, setIsClicked
  }

  return (
    <div className="App">
      <OpenAppContext.Provider value={openAppContextValue}>
        <DateContext.Provider value={{ isDateVisible, setIsDateVisible }}>
          <MinimizedAppContext.Provider value={{ minimizedApps, setMinimizedApps }}>
            <StyleContext.Provider 
            value={{navPanelTransparency, setNavPanelTransparency, primaryColor, setPrimaryColor, isRounded, setIsRounded}}>
              <NavigationPanel />
              <OpenedAppList />
            </StyleContext.Provider>
          </MinimizedAppContext.Provider>
        </DateContext.Provider>
      </OpenAppContext.Provider>
    </div>
  );
}

export default App;
