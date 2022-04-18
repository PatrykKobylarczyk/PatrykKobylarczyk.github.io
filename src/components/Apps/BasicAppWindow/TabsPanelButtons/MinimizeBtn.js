import React, { useState } from 'react';

import '../../../../styles/PanelButtons.scss';
import MinimizeBtnIcon from './MinimizeBtnIcon'

const MinimizeBtn = () => {

    const [isMinimizeHover, setIsMinimizeHover] = useState(false)

    const MinimizeHandler = () => {
        setIsMinimizeHover(prevState => !prevState)
    }

    return (
        <div className='panelButtons'>
            <button className='minimizeBtn'
                onMouseEnter={MinimizeHandler}
                onMouseLeave={MinimizeHandler}>
                {isMinimizeHover && <MinimizeBtnIcon />}
            </button>
        </div>
    );
}

export default MinimizeBtn;