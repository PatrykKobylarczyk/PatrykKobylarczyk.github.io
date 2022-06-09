import React from 'react';

import '../styles/files.scss'
import '../styles/rightPanel.scss'

import { IconContext } from "react-icons";
import { directoriesTree } from './directoriesTree.js'

import AppFile from './AppFile';
import Subfolder from './Subfolder';


const RightPanel = (props) => {

    const subfolders = directoriesTree[0].children.map((item) => {

        const appFiles = item.children.map(file => {
            return (
                <AppFile
                    key={file.path}
                    name={file.name}
                    class='filesRightPanel'
                />
            )
        })

        return (
            <>
                {props.isMainDisplayed
                    ? <Subfolder
                        key={item.path}
                        name={item.name}
                        openSubfolderHandler={props.openSubfolderHandler}
                        isSubfolderClicked={props.isSubfolderClicked}
                        class={'foldersLeftPanel'}
                    />
                    : props.isSubfolderClicked.includes(item.name) && appFiles}
            </>
        )
    })


    return (
        <IconContext.Provider value={{ size: 50, color: 'white' }}>
            <div className="rightPanel">
                {props.isFolderClicked
                    ? subfolders
                    : null}
            </div>
        </IconContext.Provider>
    )
}

export default RightPanel;