import React from 'react';

import './TabsPanelButtons.css'

import MinimizeBtn from './TabsPanelButtons/MinimizeBtn';
import MaximizeBtn from './TabsPanelButtons/MaximizeBtn';
import CloseBtn from './TabsPanelButtons/CloseBtn';

const TabsPanelButtons = () => {

    return (
        <div className='tabsPanelButtons'>
            <MinimizeBtn />
            <MaximizeBtn />
            <CloseBtn />
        </div>
    );
}

export default TabsPanelButtons;