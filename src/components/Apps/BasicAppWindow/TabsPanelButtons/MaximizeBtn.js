import React, { useState, useContext } from 'react';

import '../../../../styles/PanelButtons.scss';

import { FullScreenContext } from '../../../../context/FullScreenContext';

import MaximizeBtnIconFS from './MaximizeBtnIconFS'
import MaximizeBtnIconPS from './MaximizeBtnIconPS'

const MaximizeBtn = () => {

    const [isMaximizeHover, setIsMaximizeHover] = useState(false);
    const [clicked, setClicked] = useState(false)
    const { isFullScreen, setIsFullScreen, setAnimationClass } = useContext(FullScreenContext);

    const MaximizeBtnHoverHandler = () => {
        setIsMaximizeHover(prevState => !prevState);
    }

    const MaximizeAppHandler = () => {
        setIsFullScreen(prevState => !prevState);
        setAnimationClass(isFullScreen ? 'partScreen' : 'fullScreen')
        setClicked(prevState => !prevState)
    }


    return (
        <div className='panelButtons'>
            <button className='maximizeBtn'
                onMouseEnter={MaximizeBtnHoverHandler}
                onMouseLeave={MaximizeBtnHoverHandler}
                onClick={MaximizeAppHandler}
            >
                {isMaximizeHover ? (clicked ? <MaximizeBtnIconPS /> : <MaximizeBtnIconFS /> ): null}
            </button>
        </div>
    );
}

export default MaximizeBtn;