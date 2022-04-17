import React, { useContext } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';

const SettingsWindow = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)

    return (
        <div className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null}`} >
            <TabsPanel id={props.id} />
            <h1>Settings window</h1>
        </div>
    );
}

export default SettingsWindow;