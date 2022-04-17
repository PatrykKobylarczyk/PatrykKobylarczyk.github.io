import React, { useState, useContext } from 'react';

import '../../../../styles/PanelButtons.scss';

import { FullScreenContext } from '../../../../context/FullScreenContext';

import MaximizeBtnIconFS from './MaximizeBtnIconFS'
import MaximizeBtnIconPS from './MaximizeBtnIconPS'

const MaximizeBtn = (props) => {

    const [isMaximizeHover, setIsMaximizeHover] = useState(false);
    const [clicked, setClicked] = useState(false)
    const { fullScreenWindows, setFullScreenWindows } = useContext(FullScreenContext);

    const MaximizeBtnHoverHandlerEnter = () => {
        setIsMaximizeHover(true);
    }
    const MaximizeBtnHoverHandlerLeave = () => {
        setIsMaximizeHover(false);
    }

    const MaximizeAppHandler = (id) => {
        if (!fullScreenWindows.includes(id)) {
            setFullScreenWindows(prev => [...prev, id]);
            setClicked(true);
        } else {
            setFullScreenWindows(
                fullScreenWindows.filter(app => app !== id)
            )
            setClicked(false)
        };
        setIsMaximizeHover(false);
    }

    return (
        <div className='panelButtons'>
            <button className='maximizeBtn'
                onMouseEnter={MaximizeBtnHoverHandlerEnter}
                onMouseLeave={MaximizeBtnHoverHandlerLeave}
                onClick={() => MaximizeAppHandler(props.id)}
            >
                {isMaximizeHover ? (clicked ? <MaximizeBtnIconPS /> : <MaximizeBtnIconFS />) : null}
            </button>
        </div>
    );
}

export default MaximizeBtn;