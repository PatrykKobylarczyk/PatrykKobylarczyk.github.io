import React from 'react';

import '../styles/Settings.scss';
import TopPanel from './TopPanel';
import ButtonToggleDate from '../../../Date/ButtonToggleDate';

const Time = (props) => {
    return (
        <div className='basicSettings'>
            <TopPanel name={props.name} icon={props.icon} />
            <ButtonToggleDate />
        </div>
    );
}

export default Time;