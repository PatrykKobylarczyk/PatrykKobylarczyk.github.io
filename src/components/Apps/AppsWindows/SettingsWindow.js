import React, { useContext, useRef } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';
import Draggable from 'react-draggable'
import Settings from '../Settings/components/Settings'

const SettingsWindow = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)
    const nodeRef = useRef(null);

    return (
            <Draggable handle='.tabsPanel' nodeRef={nodeRef}>
                <div className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null}`} ref={nodeRef}>
                    <TabsPanel id={props.id} />
                    <Settings/>
                </div>
            </Draggable>
    );
}

export default SettingsWindow;