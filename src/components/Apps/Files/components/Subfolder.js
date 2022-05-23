import React from 'react';

import { AiOutlineFolderOpen, AiOutlineFolder } from 'react-icons/ai'

const Subfolder = (props) => {

    return (
        <div
                className="subfolder"
                onDoubleClick={() => props.openSubfolderHandler(props.name)}
            >
                <div className={`folder-main-data ${props.class}`} >
                    <span>{props.isSubfolderClicked.includes(props.name) ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}</span>
                    <h2>{props.name}</h2>
                </div>
            </div>
    );
}

export default Subfolder;