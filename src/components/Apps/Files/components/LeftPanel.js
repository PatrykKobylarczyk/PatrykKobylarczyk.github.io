import React from 'react';

import '../styles/files.scss'
import '../styles/leftPanel.scss'

import { IconContext } from "react-icons";
import { directoriesTree } from './directoriesTree.js'
import MainFolders from './MainFolders';
import Subfolder from './Subfolder';
import AppFile from './AppFile';

const LeftPanel = (props) => {

    const mainFolder = directoriesTree.map(item => {
        return (
            <MainFolders
                key={item.name}
                name={item.name}
                openFolderHandler={props.openFolderHandler}
                isFolderClicked={props.isFolderClicked}
            />
        )
    })

    //read about tree traversal
    const subfolders = directoriesTree[0].children.map((item) => {

        const appFiles = item.children.map(file => {
            return (
                <AppFile
                    key={file.name}
                    name={file.name}
                    class='filesLeftPanel'
                />
            )
        })       

        return (
            <>
                <Subfolder
                    key={item.name}
                    name={item.name}
                    openSubfolderHandler={props.openSubfolderHandler}
                    isSubfolderClicked={props.isSubfolderClicked}
                    class={'foldersLeftPanel'}
                />
                {props.isSubfolderClicked.includes(item.name) && appFiles}
            </>
        )
    })

    return (
        <IconContext.Provider value={{ size: 25, color: 'white' }}>
            <div className="leftPanel">
                {mainFolder}
                {props.isFolderClicked && subfolders}
            </div>
        </IconContext.Provider>
    );
}

export default LeftPanel;
