import React, { useState } from 'react';

import '../styles/App.scss';
import { DateContext } from '../context/DateContext'
import { OpenAppContext } from '../context/OpenAppContext'
import { MinimizedAppContext } from '../context/MinimizedAppContext';

import NavigationPanel from './NavigationPanel'
import ButtonToggleDate from './Date/ButtonToggleDate';
import OpenedAppList from './Apps/BasicAppWindow/OpenedAppList'

const App = () => {
  const [isDateVisible, setIsDateVisible] = useState(true)

  const [isFilesOpened, setIsFilesOpened] = useState()
  const [isMailOpened, setIsMailOpened] = useState()
  const [isSettingsOpened, setIsSettingsOpened] = useState()
  const [isGamesOpened, setIsGamesOpened] = useState()
  const [filesBtnId, setFilesBtnId] = useState()
  const [mailBtnId, setMailBtnId] = useState()
  const [settingsBtnId, setSettingsBtnId] = useState()
  const [gamesBtnId, setGamesBtnId] = useState()
  const [openedAppOrder, setOpenedAppOrder] = useState([])
  const [isClicked, setIsClicked] = useState(false);
  const [minimizedApps, setMinimizedApps] = useState([])

  const openAppContextValue = {
    isFilesOpened, setIsFilesOpened,
    filesBtnId, setFilesBtnId,
    isMailOpened, setIsMailOpened,
    mailBtnId, setMailBtnId,
    isSettingsOpened, setIsSettingsOpened,
    settingsBtnId, setSettingsBtnId,
    isGamesOpened, setIsGamesOpened,
    gamesBtnId, setGamesBtnId,
    openedAppOrder, setOpenedAppOrder,
    isClicked, setIsClicked
  }

  return (
    <div className="App">
      <OpenAppContext.Provider value={openAppContextValue}>
        <DateContext.Provider value={{ isDateVisible, setIsDateVisible }}>
          <MinimizedAppContext.Provider value={{ minimizedApps, setMinimizedApps }}>
            <NavigationPanel />
            <ButtonToggleDate />
            <OpenedAppList />
          </MinimizedAppContext.Provider>
        </DateContext.Provider>
      </OpenAppContext.Provider>
    </div>
  );
}

export default App;
