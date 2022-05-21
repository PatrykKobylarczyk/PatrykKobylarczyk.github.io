import React, { useState } from 'react';

import '../styles/files.scss'
import '../styles/leftPanel.scss'

import { AiOutlineFolderOpen, AiOutlineFolder } from 'react-icons/ai'

import { IconContext } from "react-icons";

import { directoriesTree } from './directoriesTree.js'
import MainFolders from './MainFolders';

const LeftPanel = () => {

    const [isFolderClicked, setIsFolderClicked] = useState(false)
    const [isSubfolderClicked, setIsSubfolderClicked] = useState([])

    const openFolderHandler = () => {
        setIsFolderClicked(prev => !prev)
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
                        return [...prev, name]
                    }
                })
                break;
            default:
                console.log('Oops');
        }
    }

    const mainFolder = directoriesTree.map(item => {
        return (
            <div
                key={item.name}
                className="folder-main"
                onDoubleClick={openFolderHandler}
            >
                <div className="folder-main-data" >
                    <span>{isFolderClicked ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}</span>
                    <h2>{item.name}</h2>
                </div>
            </div>
        )
    })

    const subfolders = directoriesTree[0].children.map(item => {
        return (
            <div
                key={item.name}
                className="subfolder"
                onDoubleClick={() => openSubfolderHandler(item.name)}
            >
                <div className="folder-main-data" >
                    <span>{isSubfolderClicked.includes(item.name) ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}</span>
                    <h2>{item.name}</h2>
                </div>
            </div>
        )
    })

    return (
        <IconContext.Provider value={{ size: 25, color: 'white' }}>
            <div className="leftPanel">
                {mainFolder}
                {isFolderClicked && subfolders}
            </div>
        </IconContext.Provider>
    );
}

export default LeftPanel;