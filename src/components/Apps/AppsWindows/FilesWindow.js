import React, { useContext, useRef } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';
import Draggable from 'react-draggable'

const FilesWindow = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null}`}>
                <TabsPanel id={props.id} handle={props.handle} nodeRef={nodeRef}/>
                <h1>Files window</h1>
            </div>
        </Draggable>
    );
}

export default FilesWindow;