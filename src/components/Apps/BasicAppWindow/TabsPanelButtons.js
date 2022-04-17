import React, { useState } from 'react';

import '../../../styles/TabsPanelButtons.scss'

import MinimizeBtn from './TabsPanelButtons/MinimizeBtn';
import MaximizeBtn from './TabsPanelButtons/MaximizeBtn';
import CloseBtn from './TabsPanelButtons/CloseBtn';

const TabsPanelButtons = (props) => {


    return (
        <div className='tabsPanelButtons'>
            <MinimizeBtn />
            <MaximizeBtn id={props.id} />
            <CloseBtn id={props.id} />
        </div>
    );
}

export default TabsPanelButtons;