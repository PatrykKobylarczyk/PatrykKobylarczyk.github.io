import React, { useState } from 'react';

import './App.css';
import { DateContext } from '../context/DateContext'
import { OpenAppContext } from '../context/OpenAppContext'

import NavigationPanel from './NavigationPanel'
import ButtonToggleDate from './Date/ButtonToggleDate';
import BasicAppWindow from './Apps/BasicAppWindow/BasicAppWindow';

const App = () => {
  const [isDateVisible, setIsDateVisible] = useState(true)

  const [isFilesOpened, setIsFilesOpened] = useState(false)
  const [isMailOpened, setIsMailOpened] = useState(false)
  const [isSettingsOpened, setIsSettingsOpened] = useState(false)
  const [isGamesOpened, setIsGamesOpened] = useState(false)

  const openAppContextValue = {
    isFilesOpened, setIsFilesOpened,
    isMailOpened, setIsMailOpened,
    isSettingsOpened, setIsSettingsOpened,
    isGamesOpened, setIsGamesOpened
}

  return (
    <div className="App">
      <OpenAppContext.Provider value={openAppContextValue}>
        <DateContext.Provider value={{ isDateVisible, setIsDateVisible }}>
          <NavigationPanel />
          <ButtonToggleDate />
          {isFilesOpened && <BasicAppWindow />}
        </DateContext.Provider>
      </OpenAppContext.Provider>
    </div>
  );
}

export default App;
