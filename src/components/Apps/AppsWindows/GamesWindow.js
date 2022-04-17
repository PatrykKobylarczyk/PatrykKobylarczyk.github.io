import React, { useContext } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';

const GamesWindow = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)

    return (
        <div className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null}`} >
            <TabsPanel id={props.id} />
            <h1>Games window</h1>
        </div>
    );
}

export default GamesWindow;