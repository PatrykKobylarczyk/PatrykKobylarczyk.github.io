import React from 'react';

import '../styles/files.scss'
import '../styles/rightPanel.scss'

import { IconContext } from "react-icons";
import { directoriesTree } from './directoriesTree.js'

import AppFile from './AppFile';
import Subfolder from './Subfolder';


const RightPanel = (props) => {

    const subfolders = directoriesTree[0].children.map((item) => {


        return (
            <>
                <Subfolder
                    key={item.name}
                    name={item.name}
                    openSubfolderHandler={props.openSubfolderHandler}
                    isSubfolderClicked={props.isSubfolderClicked}
                    class={item.type}
                />
            </>
        )
    })

    // const appFiles = directoriesTree[0].children.children.map(file => {
    //         return (
    //             <AppFile
    //                 key={file.name}
    //                 name={file.name}
    //                 class='filesLeftPanel'
    //             />
    //         )
    //     })
console.log(subfolders.name);

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