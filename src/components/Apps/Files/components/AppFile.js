import React from 'react';

import { AiOutlineFolder } from 'react-icons/ai'

const AppFile = (props) => {

    return (
        <div
            key={props.name}
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