import React from 'react';

import { AiOutlineFolderOpen, AiOutlineFolder } from 'react-icons/ai'

const MainFolders = (props) => {

    return (
        <div
            key={props.name}
            className="folder-main"
            onDoubleClick={props.openFolderHandler}
        >
            <div className="folder-main-data" >
                <span>{props.isFolderClicked ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}</span>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}

export default MainFolders;