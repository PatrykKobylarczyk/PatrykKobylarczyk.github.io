import React from 'react';

import '../styles/Settings.scss';

const TopPanel = (props) => {
    return (
        <div className='topPanel'>
            <span>{props.icon}</span>
            <p>{props.name}</p>
        </div>
    );
}

export default TopPanel;