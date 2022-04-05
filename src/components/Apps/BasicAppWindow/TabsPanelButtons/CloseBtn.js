import React, { useState, useContext } from 'react';

import './PanelButtons.css';

import { OpenAppContext } from '../../../../context/OpenAppContext';

const CloseBtn = () => {
    const {setIsFilesOpened} = useContext(OpenAppContext)
    const [isCloseHover, setIsCloseHover] = useState(false)

    const CloseButtonHoverHandler = () => {
        setIsCloseHover(prevState => !prevState)
    }

    const CloseAppHandler = () => {
        setIsFilesOpened(prevState => !prevState)
    }

    return (
        <div className='panelButtons'>
            <button className='closeBtn'
                onMouseEnter={CloseButtonHoverHandler}
                onMouseLeave={CloseButtonHoverHandler}
                onClick={CloseAppHandler}>
                {isCloseHover &&
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="-1" x2="9.42815" y2="-1" transform="matrix(0.697762 -0.716329 0.697762 0.716329 2.32364 9.47003)" stroke="#800000" strokeWidth="2" strokeLinecap="round" />
                        <line x1="1" y1="-1" x2="9.42815" y2="-1" transform="matrix(0.697762 0.716329 -0.697762 0.716329 0.919998 2)" stroke="#800000" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                }
            </button>
        </div>
    );
}

export default CloseBtn;