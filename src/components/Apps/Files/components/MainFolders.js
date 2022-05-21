import React from 'react';

import { directoriesTree } from './directoriesTree.js'
import { AiOutlineFolderOpen, AiOutlineFolder } from 'react-icons/ai'

const MainFolders = (props) => {

    const mainFolder = directoriesTree.map(item => {
        return (
            <div
                key={item.name}
                className="folder-main"
                onDoubleClick={props.openFolderHandler}
            >
                <div className="folder-main-data" >
                    <span>{props.isFolderClicked ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}</span>
                    <h2>{item.name}</h2>
                </div>
            </div>
        )
    })

    return ( 
        {mainFolder}
     );
}
 
export default MainFolders;