import React, { useContext, useRef } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';
import Draggable from 'react-draggable'


const FilesWindow = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)
    const nodeRef = useRef(null);

    return (
        <Draggable handle='.tabsPanel' nodeRef={nodeRef}>
            <div className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null}`} ref={nodeRef}>
                <TabsPanel id={props.id} />
                <h1>Files window</h1>
            </div>
        </Draggable>
    );
}

export default FilesWindow;