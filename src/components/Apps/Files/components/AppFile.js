import React from 'react';

import { AiOutlineFolder } from 'react-icons/ai'

const AppFile = (props) => {

    return (
        <div
            className="app-file"
        >
            <div className='folder-main-data'>
                <span>{<AiOutlineFolder />}</span>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}

export default AppFile;