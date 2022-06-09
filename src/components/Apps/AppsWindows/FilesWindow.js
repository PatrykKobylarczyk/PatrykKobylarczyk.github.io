import React, { useState, useContext, useRef } from 'react';

import '../../../styles/BasicAppWindow.scss'
import '../../Apps/Files/styles/files.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import { StyleContext } from '../../../context/StyleContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';
import Draggable from 'react-draggable'
import LeftPanel from '../Files/components/LeftPanel';
import RightPanel from '../Files/components/RightPanel';


const FilesWindow = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)
    const nodeRef = useRef(null);
    const { primaryColor, isRounded } = useContext(StyleContext)

    const [isFolderClicked, setIsFolderClicked] = useState(false)
    const [isFMainDisplay, setIsFMainDisplay] = useState(true)
    const [isSubfolderClicked, setIsSubfolderClicked] = useState([])

    const openFolderHandler = () => {
        setIsFolderClicked(prev => !prev)
        setIsFMainDisplay(true)
    }

    const openSubfolderHandler = (name) => {
        switch (name) {
            // fall trought in switch

            case 'portfolio':
            case 'skills':
            case 'education':
            case 'experience':
                setIsSubfolderClicked(prev => {
                    if (prev.includes(name)) {
                        const removeName = isSubfolderClicked.filter(folder => folder !== name)
                        return removeName
                    } else {
                        return [name]
                    }
                })
                setIsFMainDisplay(false)
                break;
            default:
                console.log('Oops');
        }
    }

    const borderPrimaryColor = { border: `1px solid ${primaryColor}` }
    return (
        <Draggable handle='.tabsPanel' nodeRef={nodeRef}>
            <div
                className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null} ${isRounded ? 'rounded' : null}`}
                ref={nodeRef}
                style={primaryColor ? borderPrimaryColor : null}
            >
                <TabsPanel id={props.id} />
                <div className="filesApp">
                    <LeftPanel
                        isFolderClicked={isFolderClicked}
                        isSubfolderClicked={isSubfolderClicked}
                        openFolderHandler={openFolderHandler}
                        openSubfolderHandler={openSubfolderHandler}
                    />
                    <RightPanel
                        isFolderClicked={isFolderClicked}
                        isSubfolderClicked={isSubfolderClicked}
                        openFolderHandler={openFolderHandler}
                        openSubfolderHandler={openSubfolderHandler}
                        isFMainDisplay={isFMainDisplay}
                    />
                </div>
            </div>
        </Draggable>
    );
}

export default FilesWindow;