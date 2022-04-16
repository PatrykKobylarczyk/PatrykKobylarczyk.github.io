import React, { useState } from 'react';

import '../../../../styles/PanelButtons.scss';

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
                {isMinimizeHover &&
                    <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="7" y2="1" stroke="#0D5B00" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                }
            </button>
        </div>
     );
}
 
export default MinimizeBtn;